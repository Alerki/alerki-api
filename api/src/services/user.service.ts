import bcrypt from 'bcrypt';
import AuthError from '../errors/auth.error';
import AuthService from './auth.service';
import { UserModel } from '../db/models';
import { ITokens } from './auth.service';

interface IRegister {
  username: string;
  email: string;
  password: string;
  profileType: 'client' | 'master';
  deviceName: string;
}

interface ILogIn {
  username?: string;
  email?: string;
  password: string;
}

interface IUserService {
  findUserByUsername(username: string): Promise<UserModel | null>

  findUserByEmail(email: string): Promise<UserModel | null>

  register({
    username,
    email,
    password,
    profileType,
  }: IRegister): Promise<ITokens>;

  logIn({
    username,
    email,
    password,
  }: ILogIn): any;

  logOut(): any;

  withGoogle(): any;
}

/**
 * User service
 */
class UserService implements IUserService {
  /**
   * Find user by email
   * @param {string} email User email to find
   * @returns {UserModel | null} User if exists
   */
  async findUserByEmail(email: string) {
    return UserModel.findOne({
      raw: true,
      where: {
        email,
      },
    });
  }

  /**
   * Find user by username
   * @param username Username to find
   * @returns {UserModel | null} User if exists
   */
  async findUserByUsername(username: string) {
    return UserModel.findOne({
      raw: true,
      where: {
        username,
      },
    });
  }

  /**
   * Try to register the user, if possible make it and return new user and the tokens
   * @param {IRegister} into Information required to register an user
   * @returns {object} Return user and tokens
   */
  async register({
    username,
    email,
    password,
    profileType,
    deviceName,
  }: IRegister) {
    // Check if email already not exists
    if (await this.findUserByEmail(email)) {
      throw AuthError.EmailExists();
    }

    // Check if username already not exists
    if (await this.findUserByUsername(username)) {
      throw AuthError.UsernameExists();
    }

    // Prepare password
    const hashedPassword = bcrypt.hashSync(password, 1);

    // Create new user
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      profileType,
    });

    // Generate tokens
    const tokens = await AuthService.generateTokens({
      id: newUser.id,
      username,
      email,
    });

    // Save tokens
    AuthService.saveToken(tokens.refreshToken, newUser.id, deviceName);

    return {
      user: newUser,
      ...tokens,
    };
  }

  async logIn({
    username,
    email,
    password,
  }: ILogIn) {}

  async logOut() {}

  async withGoogle() {}
}

export default new UserService();
