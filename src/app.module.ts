import { Module } from '@nestjs/common';

import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { ClientProfileModule } from './client/client-profile.module';
import { GoogleModule } from './google/google.module';
import { MasterProfileModule } from './master/master-profile.module';
import { ServiceModule } from './service/service.module';
import { ServiceModuleService } from './service/services/service-module.service';
import { PrismaModule } from './shared/modules/prisma/prisma.modules';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    AppointmentModule,
    PrismaModule,
    GoogleModule,
    MasterProfileModule,
    ClientProfileModule,
    ServiceModule,
  ],
  providers: [ServiceModuleService],
})
export class AppModule {}
