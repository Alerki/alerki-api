import { ProfileModule } from '@Module/profile/profile.module';
import { ServiceController } from '@Src/modules/service/service.controller';
import { ServiceService } from '@Src/modules/service/service.service';
import { Module, forwardRef } from '@nestjs/common';

@Module({
  providers: [ServiceService],
  controllers: [ServiceController],
  imports: [forwardRef(() => ProfileModule)],
  exports: [ServiceService],
})
export class ServiceModule { }
