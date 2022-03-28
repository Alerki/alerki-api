import AuthService, { ITokenizeUser } from './../services/auth.service';
import { Router, Request, Response } from 'express';
import Controller from '../interfaces/controller.interface';
import Validator, { fields } from '../utils/validator';
import IError from '../interfaces/error.interface';
import UserService from '../services/user.service';
import getDeviceName from '../utils/deviceName';
import PrivateUserDto from '../utils/dto/private-user.dto';
import DevicesDto from '../utils/dto/devices.dto';
import isAuthenticated, { AuthRequest } from '../middlewares/isAuthenticated';

interface IAuthController extends Controller {
  register(req: Request, res: Response): any;
  logIn(req: Request, res: Response): any;
  logOut(req: Request, res: Response): any;
  withGoogle(req: Request, res: Response): any;
  getDevices(req: Request, res: Response): any;
  deleteDevice(req: Request, res: Response): any;
}

/**
 * Implements authentication logic
 */
class AuthController implements IAuthController {
  public path = '/auth';
  public router = Router();

  /**
   * Authentication controller constructor
   */
  constructor() {
    this.router.post(`${this.path}/register`, this.register);
    this.router.post(`${this.path}/log-in`, this.logIn);
    this.router.get(
      `${this.path}/log-out`,
      isAuthenticated,
      this.logOut,
    );
    this.router.get(`${this.path}/oauth/google`, this.withGoogle);
    this.router.get(
      `${this.path}/devices`,
      isAuthenticated,
      this.getDevices,
    );
  }

  async register(req: Request, res: Response) {
    try {
      const {
        username,
        email,
        password,
        profileType,
      } = req.body;

      Validator({
        all: [
          { ...fields.usernameField(username) },
          { ...fields.emailField(email) },
          { ...fields.profileTypeField(profileType) },
          { ...fields.passwordField(password) },
        ],
      });

      const deviceName = getDeviceName(req);

      const userData = await UserService.register({
        username,
        email,
        password,
        profileType,
        deviceName,
      });

      const userDto = new PrivateUserDto(userData.user);

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      res.cookie('accessToken', userData.accessToken, { maxAge: 30 * 60 * 60 * 1000 });

      res.json({
        ...userDto,
      });
    } catch (e: IError | any) {
      res.status(e?.status || 500).json(e?.error);
    }
  }

  async logIn(req: Request, res: Response) {
    try {
      const {
        username,
        email,
        password,
      } = req.body;

      Validator({
        all: [
          { ...fields.passwordField(password) },
        ],
      });

      Validator({
        atLeastOne: [
          { ...fields.usernameField(username) },
          { ...fields.emailField(email) },
        ],
      });

      const deviceName = getDeviceName(req);

      const userData = email
        ? await UserService.logInByEmail({ email, password, deviceName })
        : await UserService.logInByUsername({ username, password, deviceName });

      const userDto = new PrivateUserDto(userData.user);

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      res.cookie('accessToken', userData.accessToken, { maxAge: 30 * 60 * 60 * 1000 });

      res.json({
        ...userDto,
      });
    } catch (e: IError | any) {
      res.status(e?.status || 500).json(e?.error);
    }
  }

  async logOut(req: AuthRequest, res: Response) {
    try {
      const {
        refreshToken,
      } = req.cookies;

      const {
        id,
      } = req.token!;

      const deviceName = getDeviceName(req);

      UserService.logOut({
        userID: id,
        deviceName,
        refreshToken,
      });

      res.clearCookie('refreshToken');
      res.clearCookie('accessToken');

      res.sendStatus(200);
    } catch (e: IError | any) {
      console.log(e);
      res.status(e?.status || 500).json(e?.error);
    }
  }

  async withGoogle(req: Request, res: Response) {
    try {
      console.log(req, res);
    } catch (e: IError | any) {
      console.log(e);
      res.status(e?.status || 500).json(e?.error);
    }
  }

  async getDevices(req: AuthRequest, res: Response) {
    try {
      const {
        id,
      } = req.token!;

      const devices = await AuthService.findAllByUserID(id);

      const devicesDto = new DevicesDto(devices);

      res.json(devices).end();
    } catch (e: IError | any) {
      console.log(e);
      res.status(e?.status || 500).json(e?.error);
    }
  }

  async deleteDevice(req: Request, res: Response) {
    try {
      console.log(req, res);
    } catch (e: IError | any) {
      console.log(e);
      res.status(e?.status || 500).json(e?.error);
    }
  }
}

export default AuthController;
