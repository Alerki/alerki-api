import getCookies from '@Test/util/get-cookies';
import { Application } from 'express';

import * as request from 'supertest';

// List of usernames to generate unique usernames
const usernames = new Set();

// List of emails to generate unique emails
const emails = new Set();

// List of characters to generate random string
const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Generate random string
 *
 * @param length random string length
 * @returns random string
 */
function randomString(length: number) {
  let result = '';
  const charactersLength = characters.length;

  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

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

  return user;
};