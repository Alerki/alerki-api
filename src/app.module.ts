import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from "path"

import { AppResolver } from './app.resolver';

// import { AppointmentModule } from './appointment/appointment.module';
// import { AuthModule } from './auth/auth.module';
// import { ClientProfileModule } from './client/client-profile.module';
// import { GoogleModule } from './google/google.module';
// import { MasterProfileModule } from './master/master-profile.module';
// import { ServiceModule } from './service/service.module';
// import { PrismaModule } from './shared/modules/prisma/prisma.modules';
// import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // AuthModule,
    // UserModule,
    // AppointmentModule,
    // PrismaModule,
    // GoogleModule,
    // MasterProfileModule,
    // ClientProfileModule,
    // ServiceModule,
  ],
  providers:  [
    AppResolver,
  ]
})
export class AppModule {}
