import * as dotenv from 'dotenv';
import { cleanEnv, makeValidator, num, port, str } from 'envalid';
import * as path from 'path';

dotenv.config({ path: path.join(path.resolve(), '.env') });

export const evalValidator = makeValidator((value: string) => {
  if (!/^[\d+\-*/\s().]+$/.test(value)) {
    throw new Error(`Bad eval input value: ${value}`);
  }

  return eval(value);
});

export const ENV = cleanEnv(process.env, {
  PORT: port(),

  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),

  DATABASE_USER: str(),
  DATABASE_PASSWORD: str(),
  DATABASE_HOST: str(),
  DATABASE_PORT: num(),
  DATABASE_NAME: str(),
  DATABASE_URL: str(),

  JWT_ACCESS_TOKEN_SECRET: str(),
  JWT_ACCESS_TOKEN_EXPIRES_IN: evalValidator(),
  JWT_REFRESH_TOKEN_SECRET: str(),
  JWT_REFRESH_TOKEN_EXPIRES_IN: evalValidator(),

  PASSWORD_HASH: num(),
});
