import { ServiceController } from '@Src/modules/service/service.controller';
import { ServiceService } from '@Src/modules/service/service.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ServiceService],
  controllers: [ServiceController],
  imports: [],
  exports: [ServiceService],
})
export class ServiceModule { }
