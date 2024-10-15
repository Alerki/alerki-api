import { forwardRef, Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { MasterServiceModule } from '../master-service/master-service.module';
import { MinIOModule } from '../minio/minio.module';
import { UserModule } from '../user/user.module';
import { ProfileController } from './profile.controller';
import { ProfileControllerService } from './profile.controller.service';
import { ProfileResolver } from './profile.resolver';
import { ProfileResolverService } from './profile.resolver.service';
import { ProfileService } from './profile.service';
import { ProfilePictureService } from './profile-picture.service';
import { ProfileValidationService } from './profile-validation.service';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    ProfileResolver,
    ProfileResolverService,
    ProfileValidationService,
    ProfileControllerService,
    ProfilePictureService,
  ],
  imports: [
    CommonPrismaModule,
    AuthModule,
    UserModule,
    ProfileModule,
    forwardRef(() => MasterServiceModule),
    MinIOModule,
  ],
  exports: [ProfileService, ProfileValidationService],
})
export class ProfileModule {}
