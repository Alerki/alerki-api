import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppointmentModule } from './modules/appointment/appointment.module';
import { AuthModule } from './modules/auth/auth.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { LanguageModule } from './modules/language/language.module';
import { MasterScheduleModule } from './modules/master-schedule/master-schedule.module';
import { MasterServiceModule } from './modules/master-service/master-service.module';
import { MasterWeeklyScheduleModule } from './modules/master-weekly-schedule/master-weekly-schedule.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ServicesModule } from './modules/services/services.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      includeStacktraceInErrorResponses: false,
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
    LanguageModule,
  ],
})
export class AppModule {}
