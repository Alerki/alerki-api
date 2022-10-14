import { ServiceController } from '@Module/service/service.controller';
import { ServiceService } from '@Module/service/service.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ServiceService],
  controllers: [ServiceController],
  imports: [],
  exports: [ServiceService],
})
export class ServiceModule { }
