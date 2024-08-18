import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AuthModule } from './modules/auth/auth.module';
import { ServicesModule } from './modules/services/services.module';
import { ProfileModule } from './modules/profile/profile.module';
import { MasterServiceModule } from './modules/master-service/master-service.module';
import { MasterWeeklyScheduleModule } from './modules/master-weekly-schedule/master-weekly-schedule.module';
import { UserModule } from './modules/user/user.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { MasterScheduleModule } from './modules/master-schedule/master-schedule.module';
import { AppointmentModule } from './modules/appointment/appointment.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
    ServicesModule,
    ProfileModule,
    MasterServiceModule,
    MasterWeeklyScheduleModule,
    UserModule,
    CurrencyModule,
    MasterScheduleModule,
    AppointmentModule,
  ],
})
export class AppModule {}
