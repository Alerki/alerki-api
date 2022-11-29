import type { Application } from 'express';
import * as request from 'supertest';

import getCookies from '@Test/util/get-cookies';
import { randomString } from '@Test/util/random-string';

export interface UserI {
  email: string,
  username: string,
  password: string,
  refreshToken: string,
  accessToken: string,
}

// List of usernames to generate unique usernames
const usernames = new Set();

// List of emails to generate unique emails
const emails = new Set();

/**
 * Register user
 *
 * @param app express application
 * @returns user
 */
export const registerUser = async (app: Application) => {
  const user = {
    email: '',
    username: '',
    password: '',
    refreshToken: '',
    accessToken: '',
  };

  // Generate username
  user.username = randomString(10);

  while (usernames.has(user.username)) {
    user.username = randomString(10);
  }

  // Generate email
  user.email = randomString(10) + '@' + randomString(10) + '.com';

  while (emails.has(user.email)) {
    user.email = randomString(10) + '@' + randomString(10) + '.com';
  }

  // Generate password
  user.password = randomString(10);

  await request(app)
    .post('/auth/sign-up')
    .send(user)
    .expect(201);

  const signIn = await request(app)
    .post('/auth/sign-in')
    .send(user)
    .expect(200);

  const cookies = getCookies(signIn);

  user.accessToken = signIn.body.accessToken;
  user.refreshToken = cookies.refreshToken.value;

  return user as UserI;
};

export const enableMaster = async (app: Application, user: UserI) => {
  if (!user.accessToken) {
    throw new Error('Access token not exists');
  }

  await request(app)
    .patch('/user/enable-master')
    .set({ Authorization: 'Bearer ' + user.accessToken })
    .expect(200);
};

export const disableMaster = async (app: Application, user: UserI) => {
  if (!user.accessToken) {
    throw new Error('Access token not exists');
  }

  await request(app)
    .patch('/user/disable-master')
    .set({ Authorization: 'Bearer ' + user.accessToken })
    .expect(200);
};

interface RequestI {
  url: string,
  method: 'get' | 'patch' | 'delete' | 'post',
  query?: Record<string, any>,
  send?: any,
  expect?: number,
}

export const authRequest = async (
  app: Application,
  user: UserI,
  {
    url,
    method,
    query,
    send,
    expect,
  }: RequestI,
) => {
  if (expect) {
    return await request(app)[method](url)
      .set({ Authorization: 'Bearer ' + user.accessToken })
      .query(query)
      .send(send)
      .expect(expect);
  }

  return await request(app)[method](url)
    .set({ Authorization: 'Bearer ' + user.accessToken })
    .query(query)
    .send(send);
};
