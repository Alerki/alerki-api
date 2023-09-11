import { Module } from '@nestjs/common';

import { ClientProfileService } from './services/client-profile.service';

@Module({
  controllers: [],
  providers: [ClientProfileService],
  imports: [],
  exports: [ClientProfileService],
})
export class ClientProfileModule {}
