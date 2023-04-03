import { Module } from '@nestjs/common';

import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { ClientProfileModule } from './client-profile/client-profile.module';
import { GoogleModule } from './google/google.module';
import { MasterProfileModule } from './master-profile/master-profile.module';
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
  ],
})
export class AppModule {}
