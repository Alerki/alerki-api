import Prisma from '@prisma/client';
import type { Application } from 'express';
import * as request from 'supertest';

import getCookieUtil from './get-cookie.util';
import { randomString } from './random-string.util';

interface RequestI {
  url: string;
  method: request.Test['method'];
  query?: request.Test['query'];
  set?: request.Test['set'][];
  send?: request.Test['send'];
  expect?: number;
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

  /**
   * User actions constructor
   *
   * @param app express application
   * @param options user options
   */
  constructor(
    app: Application,
    options?: {
      email?: string;
      username?: string;
      password?: string;
    },
  ) {
    this.app = app;
    this._email = options?.email ?? UserActions.generateEmail();
    this._username = options?.username ?? UserActions.generateUsername();
    this._password = options?.password ?? UserActions.generatePassword();
  }

  get credentials() {
    return {
      email: this._email,
      username: this._username,
      password: this._password,
    };
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
    // if (this._user) {
    //   throw new Error('User is not defined');
    // }

    return this._user;
  }

  /**
   * Register new user
   */
  async register() {
    await request(this.app)
      .post('/auth/register')
      .send({
        username: this._username,
        email: this._email,
        password: this._password,
      })
      .expect(201);

    const signIn = await request(this.app)
      .post('/auth/log-in')
      .send({
        username: this._username,
        email: this._email,
        password: this._password,
      })
      .expect(201);

    const cookies = getCookieUtil(signIn);

    this._accessToken = signIn.body.accessToken;

    if (cookies?.refreshToken?.value) {
      this._refreshToken = cookies.refreshToken.value;
    }

    await this.getUser();
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
   * Make request
   *
   * @param param0 request options
   * @returns response
   */
  async request({ url, method, query, send, expect }: RequestI) {
    if (expect) {
      return await request(this.app)
        [method](url)
        .set({ Authorization: 'Bearer ' + this._accessToken })
        .set('Cookie', ['refreshToken=' + this._refreshToken])
        .query(query)
        .send(send)
        .expect(expect);
    }

    return await request(this.app)
      [method](url)
      .set({ Authorization: 'Bearer ' + this._accessToken })
      .set('Cookie', ['refreshToken=' + this._refreshToken])
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
    }: RequestI & { refreshToken?: string; accessToken?: string },
  ) {
    if (expect) {
      return await request(app)
        [method](url)
        .set({ Authorization: 'Bearer ' + accessToken })
        .set('Cookie', [`refreshToken=${refreshToken}`])
        .query(query)
        .send(send)
        .expect(expect);
    }

    return await request(app)
      [method](url)
      .set({ Authorization: 'Bearer ' + accessToken })
      .set('Cookie', [`refreshToken=${refreshToken}`])
      .query(query)
      .send(send);
  }

  /**
   * Get user
   *
   * @param app express application
   * @param userId user ID to get
   * @param expect expected response
   * @returns user
   */
  static async getUser(app: Application, userId: string, expect = 200) {
    return request(app).get(`/user/${userId}`).expect(expect);
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