import type { Application } from 'express';
import * as request from 'supertest';

import getCookies from '@Test/util/get-cookies';
import { randomString } from '@Test/util/random-string';

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
    },
  ) {
    this.app = app;

    this._email = options?.email || UserActions.generateEmail();

    this._username = options?.username || UserActions.generateUsername();

    this._password = options?.password || UserActions.generatePassword();
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
