import { DataSource } from 'typeorm';

import { SetEnvVariable } from '@Shared/decorators/set-env-variable.decorator';

class DatabaseData {
  @SetEnvVariable('DB_USER')
  readonly username: string;

  @SetEnvVariable('DB_PASSWORD')
  readonly password: string;

  @SetEnvVariable('DB_DATABASE')
  readonly database: string;

  @SetEnvVariable('DB_HOST')
  readonly host: string;

  @SetEnvVariable('DB_PORT', 'number')
  readonly port: number;

  @SetEnvVariable('DB_DIALECT')
  readonly dialect: any;
}

const database = new DatabaseData();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: database.dialect,
        host: database.host,
        port: database.port,
        username: database.username,
        password: database.password,
        database: database.database,
        entities: [
          __dirname + '../../../**/*.entity{.ts,.js}',
        ],
        // Enable synchronize for development and testing purposes
        synchronize: process.env.NODE_ENV === 'test' ||
          process.env.NODE_ENV === 'development'
          ? true
          : false,
        // Enable dropSchema for testing
        dropSchema: process.env.NODE_ENV === 'test'
          ? true
          : false,
      });

      return dataSource.initialize();
    },
  },
];
