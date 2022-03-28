import request from 'supertest';
import App from '../../app';
import AuthError from '../../errors/auth.error';
import IError from '../../interfaces/error.interface';
import getCookies from '../../utils/getCookies';
import UserModel from '../../interfaces/db/models/user.interface';

const APP = new App();
const app = APP.getApp();

const user = {
  username: 'user',
  email: 'user@user.com',
  profileType: 'client',
  password: 'user',
  id: 0,
  firstName: '',
  lastName: '',
  phoneNumber: '',
  pictureID: 0,
  clientID: 0,
  masterID: 0,
  banned: false,
  accessToken: '',
  refreshToken: '',
};

describe('Authentication functionality', () => {
  describe('test register endpoint', () => {
    it('should register user with correct data', async () => {
      const r = await request(app)
        .post('/auth/register')
        .send(user);

      expect(r.status).toEqual(200);

      const cookies = getCookies(r.headers);

      expect(cookies?.accessToken?.value).toBeTruthy();
      expect(cookies?.refreshToken?.value).toBeTruthy();

      user.accessToken = cookies.accessToken.value;
      user.refreshToken = cookies.refreshToken.value;
    });

    it('should not register user without any data', async () => {
      const r = await request(app)
        .post('/auth/register')
        .send({});

      expect(r.statusCode).toEqual(400);
    });

    it('should return 400 code due to incorrect email', async () => {
      const r = await request(app)
        .post('/auth/register')
        .send({
          ...user,
          email: 'bad@email',
        });

      expect(r.statusCode).toEqual(400);
    });

    it('should not register user with the same data', async () => {
      const r = await request(app)
        .post('/auth/register')
        .send(user);

      expect(r.statusCode).toEqual(400);
    });
  });

  describe('test log-in endpoints', () => {
    it('should log-in the user', async () => {
      const r = await request(app)
        .post('/auth/log-in')
        .send(user);

      expect(r.statusCode).toEqual(200);

      const cookies = getCookies(r.headers);

      expect(cookies?.accessToken?.value).toBeTruthy();
      expect(cookies?.refreshToken?.value).toBeTruthy();

      user.accessToken = cookies.accessToken.value;
      user.refreshToken = cookies.refreshToken.value;
    });

    it('should not log-in user with bad password', async () => {
      const r = await request(app)
        .post('/auth/log-in')
        .send({
          ...user,
          password: 'bad password',
        });

      expect(r.statusCode).toEqual(400);
    });

    it('should not log-in user with bad email', async () => {
      const r = await request(app)
        .post('/auth/log-in')
        .send({
          ...user,
          email: 'bad email',
        });

      expect(r.statusCode).toEqual(400);
    });

    it('should not log-in user with bad username', async () => {
      const r = await request(app)
        .post('/auth/log-in')
        .send({
          ...user,
          username: 'bad username',
          email: null,
        });

      expect(r.statusCode).toEqual(400);
    });
  });

  describe('test log-out endpoint', () => {
    it('should not log-out user without tokens', async () => {
      const r = await request(app)
        .get('/auth/log-out');

      expect(r.statusCode).toEqual(401);
    });

    it('should log-out user without tokens', async () => {
      const r = await request(app)
        .get('/auth/log-out')
        .set('Cookie', [
          'accessToken=' + user.accessToken,
          'refreshToken=' + user.refreshToken,
        ]);

      expect(r.statusCode).toEqual(200);

      const cookies = getCookies(r.headers);

      console.log(cookies);
    });
  });
});
