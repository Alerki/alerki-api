import { Module } from '@nestjs/common';

import { databaseProviders } from '@Module/database/database.provider';

@Module({
  controllers: [],
  providers: [
    ...databaseProviders,
  ],
  imports: [],
  exports: [
    ...databaseProviders,
  ],
})
export class DatabaseModule { }
