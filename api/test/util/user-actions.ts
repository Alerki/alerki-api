import type { Application } from 'express';
import * as request from 'supertest';

import { CreateAppointmentDto, GetAppointmentQueries } from '@Module/appointment/dto/appointment.dto';
import {
  CreateMasterScheduleDto,
  CreateMasterServiceDto,
  GetMasterMonthlyScheduleQueries,
  GetMasterScheduleQueries,
  PatchMasterScheduleDto,
  PatchMasterWeeklyScheduleDto,
} from '@Module/user/dto/master.dto';
import getCookies from '@Test/util/get-cookies';
import { randomString } from '@Test/util/random-string';
import Prisma from '@prisma/client';

interface RequestI {
  url: string,
  method: 'get' | 'patch' | 'delete' | 'post',
  query?: Record<string, any>,
  send?: any,
  expect?: number,
}

// List of usernames to generate unique usernames
const usernames = new Set();

// List of emails to generate unique emails
const emails = new Set();

export class UserActions {
  private app: Application;
  private _email: string;
  private _username: string;
  private _password: string;
  private _accessToken: string;
  private _refreshToken: string;
  private _user: Prisma.User;
  private _masterProfile?: Prisma.MasterProfile;
  private _weeklySchedule?: Prisma.MasterWeeklySchedule;
  private _isMaster: boolean;

  /**
   * User actions constructor
   *
   * @param app express application
   * @param options user options
   */
  constructor(
    app: Application,
    options?: {
      email?: string,
      username?: string,
      password?: string,
      master?: boolean,
    },
  ) {
    this.app = app;

    this._email = options?.email || UserActions.generateEmail();

    this._username = options?.username || UserActions.generateUsername();

    this._password = options?.password || UserActions.generatePassword();

    this._isMaster = options?.master || false;
  }

  /**
   * Get user email
   */
  get email() {
    return this._email;
  }

  /**
   * Get user username
   */
  get username() {
    return this._username;
  }

  /**
   * Get use password
   */
  get password() {
    return this._password;
  }

  /**
   * Get access token
   */
  get accessToken() {
    return this._accessToken;
  }

  /**
   * Get refresh token
   */
  get refreshToken() {
    return this._refreshToken;
  }

  /**
   * Get user information
   */
  get user() {
    if (!this._user) {
      throw new Error('User doesn\'t defined');
    }

    return this._user;
  }

  /**
   * Get master profile information
   */
  get masterProfile() {
    return this._masterProfile;
  }

  /**
   * Get weekly schedule information
   */
  get weeklySchedule() {
    return this._weeklySchedule;
  }

  /**
   * Register new user
   *
   * @param app express application
   */
  async register() {
    await request(this.app)
      .post('/auth/sign-up')
      .send({
        username: this._username,
        email: this._email,
        password: this._password,
      })
      .expect(201);

    const signIn = await request(this.app)
      .post('/auth/sign-in')
      .send({
        username: this._username,
        email: this._email,
        password: this._password,
      })
      .expect(200);

    const cookies = getCookies(signIn);

    this._accessToken = signIn.body.accessToken;
    this._refreshToken = cookies.refreshToken.value;

    await this.getUser();

    if (this._isMaster) {
      await this.enableMaster();
      await this.getUser();
      await this.getMasterProfile();
    }

    await this.getUser();
  }

  /**
   * Enable master
   *
   * @param expect expected response code
   */
  async enableMaster(expect: number = 200) {
    if (!this._accessToken) {
      throw new Error('Access token not exists');
    }

    await request(this.app)
      .patch('/user/enable-master')
      .set({ Authorization: 'Bearer ' + this._accessToken })
      .expect(expect);
  }

  /**
   * Disable master
   *
   * @param expect expected response code
   */
  async disableMaster(expect: number = 200) {
    if (!this._accessToken) {
      throw new Error('Access token not exists');
    }

    await request(this.app)
      .patch('/user/disable-master')
      .set({ Authorization: 'Bearer ' + this._accessToken })
      .expect(expect);
  }

  /**
   * Get user
   *
   * Loads from `/user`, and set class `_user` field
   *
   * @returns user
   */
  async getUser() {
    const response = await request(this.app)
      .get('/user')
      .set({ Authorization: 'Bearer ' + this._accessToken })
      .expect(expect);

    this._user = response.body;

    return response;
  }

  /**
   * Get user
   *
   * @param app express application
   * @param userId user ID to get
   * @param expect expected response
   * @returns user
   */
  static async getUser(
    app: Application,
    userId: string,
    expect: number = 200,
  ) {
    const response = await request(app)
      .get(`/user/${userId}`)
      .expect(expect);

    return response;
  }

  /**
   * Get master profile
   *
   * @param expect expected response
   * @returns master profile
   */
  async getMasterProfile(expect: number = 200) {
    const masterProfile = await UserActions.getMasterProfile(
      this.app,
      this.user.masterProfileId,
      expect,
    );

    this._masterProfile = masterProfile.body;

    return masterProfile;
  }

  /**
   * Get master profile
   *
   * @param app express application
   * @param masterProfileId master profile ID
   * @param expect expected response
   * @returns master profile
   */
  static async getMasterProfile(
    app: Application,
    masterProfileId: string,
    expect: number = 200,
  ) {
    return await request(app)
      .get(
        `/user/master/${masterProfileId}`,
      )
      .expect(expect);
  }

  /**
   * Get master weekly schedule
   *
   * @param expect expected response
   * @returns master weekly schedule
   */
  async getWeeklySchedule(expect: number = 200) {
    const weeklySchedule = await UserActions.getWeeklySchedule(
      this.app,
      this.user.masterProfileId,
      expect,
    );

    this._weeklySchedule = weeklySchedule.body;

    return weeklySchedule;
  }

  /**
   * Get master weekly schedule
   *
   * @param app express application
   * @param masterProfileId master profile ID to get weekly schedule
   * @param expect expected response
   * @returns master weekly schedule
   */
  static async getWeeklySchedule(
    app: Application,
    masterProfileId: string,
    expect: number = 200,
  ) {
    return await request(app)
      .get(
        `/user/master/${masterProfileId}/weekly-schedule`,
      )
      .expect(expect);
  }

  /**
   * Pater master weekly schedule
   *
   * @param data data to patch
   * @param expect expected response
   * @returns patched master weekly schedule
   */
  async patchWeeklySchedule(
    data: PatchMasterWeeklyScheduleDto,
    expect: number = 200,
  ) {
    const response = this.request({
      url: '/user/master/weekly-schedule',
      method: 'patch',
      send: data,
      expect,
    });

    return response;
  }

  /**
   * Get services
   *
   * @param app express application
   * @param name service name
   * @returns services
   */
  static async getServices(
    app: Application,
    name: string,
    expect: number = 200,
  ) {
    return await UserActions.request(
      app,
      {
        url: '/service',
        method: 'get',
        query: {
          name,
        },
        expect,
      },
    );
  }

  /**
   * Get master service
   *
   * @param app express application
   * @param serviceId service ID
   * @param expect expected response
   * @returns
   */
  static async getMasterServices(
    app: Application,
    serviceId: string,
    expect: number = 200,
  ) {
    return await UserActions.request(
      app,
      {
        url: `/service/${serviceId}/master`,
        method: 'get',
        expect,
      },
    );
  }

  /**
   * Create master schedule
   *
   * @param data schedule data
   * @param expect expected response
   * @returns created master schedule
   */
  async createMasterSchedule(
    data: CreateMasterScheduleDto,
    expect: number = 201,
  ) {
    return await this.request(
      {
        url: '/user/master/schedule',
        method: 'post',
        send: data,
        expect,
      },
    );
  }

  /**
   * Get master schedule
   *
   * @param queries queries to get master schedule
   * @param expect expected response
   * @returns created master schedule
   */
  async getMasterSchedule(
    queries: GetMasterScheduleQueries = {},
    expect: number = 200,
  ) {
    return await UserActions.getMasterSchedule(
      this.app,
      this.user.masterProfileId,
      queries,
      expect,
    );
  }

  /**
   * Get master schedule
   *
   * @param app express application
   * @param masterProfileId master profile ID to get schedule
   * @param queries queries to get schedule
   * @param expect expected response
   * @returns master schedule
   */
  static async getMasterSchedule(
    app: Application,
    masterProfileId: string,
    queries: Partial<GetMasterScheduleQueries>,
    expect: number = 200,
  ) {
    return await request(app)
      .get(`/user/master/${masterProfileId}/schedule`)
      .query(queries)
      .expect(expect);
  }

  /**
   * Get master monthly schedule
   *
   * @param id master ID
   * @param expect expected response
   * @returns master monthly schedule
   */
  async getMasterMonthlySchedule(
    id: string,
    query: GetMasterMonthlyScheduleQueries = {},
    expect: number = 200,
  ) {
    return await UserActions.getMasterMonthlySchedule(
      this.app,
      id,
      query,
      expect,
    );
  }

  /**
   * Get master monthly schedule
   *
   * @param app express application
   * @param id master ID
   * @param expect expected result
   * @returns master monthly schedule
   */
  static async getMasterMonthlySchedule(
    app: Application,
    id: string,
    query: GetMasterMonthlyScheduleQueries = {},
    expect: number = 200,
  ) {
    return await UserActions.request(
      app,
      {
        url: `/user/master/${id}/monthly-schedule`,
        method: 'get',
        query,
        expect,
      },
    );
  }

  /**
   * Get schedule by ID
   *
   * @param scheduleId schedule ID
   * @param expect expected response
   * @returns schedule
   */
  async getMasterScheduleById(scheduleId: string, expect: number = 200) {
    return await UserActions.getMasterScheduleById(
      this.app,
      scheduleId,
      expect,
    );
  }

  /**
   * Get schedule by ID
   *
   * @param app express application
   * @param scheduleId schedule ID
   * @param expect expected response
   * @returns schedule
   */
  static async getMasterScheduleById(
    app: Application,
    scheduleId: string,
    expect: number = 200,
  ) {
    return await request(app)
      .get(`/user/master/schedule/${scheduleId}`)
      .expect(expect);
  }

  /**
   * Delete masters schedule
   *
   * @param scheduleId schedule ID to delete
   * @param expect expected response
   * @returns deleted master schedule
   */
  async deleteMasterSchedule(
    scheduleId: string,
    expect: number = 200,
  ) {
    return await this.request({
      url: `/user/master/schedule/${scheduleId}`,
      method: 'delete',
      expect,
    });
  }

  /**
   * Patch masters schedule
   *
   * @param scheduleId schedule ID to patch
   * @param expect expected response
   * @returns patched master schedule
   */
  async patchMasterSchedule(
    scheduleId: string,
    data: PatchMasterScheduleDto,
    expect: number = 200,
  ) {
    return await this.request({
      url: `/user/master/schedule/${scheduleId}`,
      method: 'patch',
      send: data,
      expect,
    });
  }

  /**
   * Create master service
   *
   * @param data new service data
   * @param expect expected response
   * @returns new master service
   */
  async createMasterService(
    data: CreateMasterServiceDto,
    expect: number = 201,
  ) {
    return this.request({
      url: '/user/master/service',
      method: 'post',
      send: data,
      expect,
    });
  }

  /**
   * Get master services
   *
   * @param expect expected response
   * @returns master services
   */
  async getOwnMasterService(
    expect: number = 200,
  ) {
    return this.request({
      url: `/user/master/${this.user.masterProfileId}/service`,
      method: 'get',
      expect,
    });
  }

  /**
   * Delete master service
   *
   * @param masterServiceId master service ID
   * @param expect expected response
   * @returns deleted master service
   */
  async deleteMasterService(
    masterServiceId: string,
    expect: number = 200,
  ) {
    return await this.request({
      url: `/user/master/service/${masterServiceId}`,
      method: 'delete',
      expect,
    });
  }

  /**
   * Create appointment
   *
   * @param data create appointment data
   * @param expect expected response
   * @returns new appointment
   */
  async createAppointment(
    data: CreateAppointmentDto,
    expect: number = 201,
  ) {
    return await this.request({
      url: '/appointment',
      method: 'post',
      send: data,
      expect,
    });
  }

  /**
   * Get appointment
   *
   * @param query query to get appointment
   * @param expect expected response
   * @returns appointment
   */
  async getAppointment(
    query: GetAppointmentQueries = {},
    expect: number = 200,
  ) {
    return this.request({
      url: '/appointment',
      method: 'get',
      query,
      expect,
    });
  }

  /**
   * Get appointment by ID
   *
   * @param app express application
   * @param id appointment ID
   * @param expect expected response
   * @returns appointment
   */
  async getAppointmentById(
    id: string,
    expect: number = 200,
  ) {
    return await UserActions.getAppointmentById(
      this.app,
      id,
      expect,
    );
  }

  /**
   * Get appointment by ID
   *
   * @param app express application
   * @param id appointment ID
   * @param expect expected response
   * @returns appointment
   */
  static async getAppointmentById(
    app: Application,
    id: string,
    expect: number = 200,
  ) {
    return await UserActions.request(
      app,
      {
        url: `/appointment/${id}`,
        method: 'get',
        expect,
      },
    );
  }

  /**
   * Make request
   *
   * @param param0 request options
   * @returns response
   */
  async request({
    url,
    method,
    query,
    send,
    expect,
  }: RequestI) {
    if (expect) {
      return await request(this.app)[method](url)
        .set({ Authorization: 'Bearer ' + this._accessToken })
        .query(query)
        .send(send)
        .expect(expect);
    }

    return await request(this.app)[method](url)
      .set({ Authorization: 'Bearer ' + this._accessToken })
      .query(query)
      .send(send);
  }

  /**
   * Make request for unauthorized user
   *
   * @param app express application
   * @param param1 request options
   * @returns response
   */
  static async request(
    app: Application,
    {
      url,
      method,
      query,
      send,
      expect,
      refreshToken,
      accessToken,
    }: RequestI & { refreshToken?: string, accessToken?: string },
  ) {
    if (expect) {
      return await request(app)[method](url)
        .set({ Authorization: 'Bearer ' + accessToken })
        .set('Cookie', [`refreshToken=${refreshToken}`])
        .query(query)
        .send(send)
        .expect(expect);
    }

    return await request(app)[method](url)
      .set({ Authorization: 'Bearer ' + accessToken })
      .set('Cookie', [`refreshToken=${refreshToken}`])
      .query(query)
      .send(send);
  }

  /**
   * Generate unique email
   *
   * @returns unique email
   */
  static generateEmail() {
    let email = randomString(10) + '@' + randomString(10) + '.com';

    while (emails.has(email)) {
      email = randomString(10) + '@' + randomString(10) + '.com';
    }

    return email;
  }

  /**
   * Generate username
   *
   * @returns unique username
   */
  static generateUsername() {
    let username = randomString(10);

    while (usernames.has(username)) {
      username = randomString(10);
    }

    return username;
  }

  /**
   * Generate password
   *
   * @returns password
   */
  static generatePassword() {
    return randomString(10);
  }
}
