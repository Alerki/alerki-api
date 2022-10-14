import type { Application } from 'express';
import * as express from 'express';

/**
 * Profile response interface
 */
export interface ProfileResponse {
  sub: string,
  email: string,
  email_verified: boolean,
  name: string,
  given_name: string,
  family_name: string,
  picture: string,
  locale: string,
}

/**
 * Token response interface
 */
export interface TokenResponse {
  access_token: string,
  expires_in: number,
  token_type: 'Bearer',
  refresh_token: string,
}

/**
 * Replace URLs options
 */
export interface ReplaceUrlsOptions {
  mockUserUrl: string,
  mockAuthUrl: string,
  mockTokenUrl: string,
}

/**
 * Replace URLs callback
 */
export type ReplaceUrlsCallback = ({
  mockUserUrl,
  mockAuthUrl,
  mockTokenUrl,
}: ReplaceUrlsOptions) => void;

/**
 * Google OAuth2.0 Mock constructor options
 */
export interface ConstructorOptions {
  redirectUrl?: string,
  profile?: ProfileResponse,
  token?: TokenResponse,
  port?: number,
}

/**
 * Server object interface
 */
export interface Server {
  /**
   * Close server method
   */
  close: () => void;
}

/**
 * Google OAuth2.0 mock
 *
 * Mocked:
 * - auth
 * - user
 * - token
 */
export class GoogleOAuthMock {
  /**
   * Express application
   */
  private _app: Application;

  /**
   * Server object
   *
   * Uses to stop server
   *
   * @example
   * server.close();
   */
  private _server: Server;

  /**
   * Express server port
   */
  private _port: number;

  /**
   * Replace URLs callback
   */
  private _replaceUrlsCallback: ReplaceUrlsCallback;

  /**
   * Redirect URL
   *
   * Redirect form here:
   *
   * `GET /mock-auth`
   */
  private _redirectUrl: string;

  /**
   * Response profile object
   *
   * Available here:
   *
   * `GET /mock-user`
   */
  private _profile: ProfileResponse;

  /**
   * Response token object
   *
   * Available here:
   *
   * `GET /mock-token`
   */
  private _token: TokenResponse;

  /**
   * Google OAuth2.0 mock constructor
   *
   * @param options constructor options
   */
  constructor(
    options: ConstructorOptions,
    replaceUrlsCallback?: ReplaceUrlsCallback,
  ) {
    this._redirectUrl = options.redirectUrl ? options.redirectUrl : '';
    this._profile = options.profile ? options.profile : {
      sub: '108442171748001887974',
      email: 'google.mock@example.com',
      email_verified: true,
      name: 'Test User',
      given_name: 'User',
      family_name: 'Test',
      picture: 'https://source.unsplash.com/user/c_v_r/500x500',
      locale: 'en',
    };
    this._token = options.token ? options.token : {
      access_token: '1/fFAGRNJru1FTz70BzhT3Zg',
      expires_in: 3920,
      token_type: 'Bearer',
      refresh_token: '1/xEoDL4iW3cxlI7yDbSRFYNG01kVKM2C-259HOF2aQbI',
    };
    this._port = options.port;
    this._replaceUrlsCallback = replaceUrlsCallback;
  }

  /**
   * Get redirect URL
   */
  get redirectUrl() {
    return this._redirectUrl;
  }

  /**
   * Set redirect URL
   */
  set redirectUrl(url: string) {
    this._redirectUrl = url;
  }

  /**
   * Get profile response object
   */
  get profile() {
    return this._profile;
  }

  /**
   * Set Profile response object
   */
  set profile(profile: Partial<ProfileResponse>) {
    Object.assign(this._profile, profile);
  }

  /**
   * Get token response object
   */
  get token() {
    return this._token;
  }

  /**
   * Set token response object
   */
  set token(token: Partial<TokenResponse>) {
    Object.assign(this._token, token);
  }

  /**
   * Get server object
   */
  get server() {
    return this._server;
  }

  /**
   * Start server
   *
   * @param port server port
   * @returns server
   */
  private _startServer() {
    // That works lol :]
    return new Promise((res) => {
      let x: Server;

      x = this._app.listen(this._port, () => {
        this._server = x;

        res(x);
      });
    });
  }

  /**
   * Create mock service
   *
   * @example
   * const service = googleOAuthMock.start(3005);
   *
   * await server.close();
   *
   * @returns server
   */
  async start() {
    this._app = express();

    this._app.get('/', (_, res) => {
      res.send('mock-auth');
    });

    this._app.get('/mock-auth', (_, res) => {
      res.redirect(this._redirectUrl);
    });

    this._app.post('/mock-token', (_, res) => {
      res.status(200).json(this._token);
    });

    this._app.get('/mock-user', (_, res) => {
      res.status(200).json(this._profile);
    });

    // Start server
    const server = await this._startServer();

    // Call URLs replace callback if exists
    if (this._replaceUrlsCallback) {
      // Formulate paths
      const mockUserUrl = `http://localhost:${this._port}/mock-user`;
      const mockAuthUrl = `http://localhost:${this._port}/mock-auth`;
      const mockTokenUrl = `http://localhost:${this._port}/mock-token`;

      this._replaceUrlsCallback({
        mockUserUrl,
        mockAuthUrl,
        mockTokenUrl,
      });
    }

    return server;
  }
}
