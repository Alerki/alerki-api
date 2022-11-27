import type { Application } from 'express';
import { Server } from 'http';
import * as express from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Image mock server constructor options
 */
export interface ConstructorOptions {
  port: number,
}

/**
 * Image mock server
 *
 * Mocked:
 * - Image: 100x100
 * - Image: 500x500
 */
export class ImageServerMock {
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
   * Google OAuth2.0 mock constructor
   *
   * @param options constructor options
   */
  constructor(
    options: ConstructorOptions,
  ) {
    this._port = options.port;
  }

  /**
   * Get server object
   */
  get server() {
    return this._server;
  }

  /**
   * Get server URL
   *
   * Example: http://localhost:3005
   */
  get serverUrl() {
    return `http://localhost:${this._port}`;
  }

  /**
   * Start server
   *
   * @param port server port
   * @returns server
   */
  private _startServer(): Promise<Server> {
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

    const picture100 = await fs.readFile(
      path.join(__dirname, './data/100x100.jpeg'),
    );
    const picture500 = await fs.readFile(
      path.join(__dirname, './data/500x500.jpeg'),
    );

    this._app.get('/100x100', (_, res) => {
      res.send(picture100);
    });

    this._app.get('/500x500', (_, res) => {
      res.send(picture500);
    });

    // Start server
    const server = await this._startServer();

    return server;
  }

  /**
   * Close Express server
   */
  async close() {
    await this._server.close();
  }
}
