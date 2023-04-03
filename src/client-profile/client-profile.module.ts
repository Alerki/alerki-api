import { Module } from '@nestjs/common';

import { ClientProfileService } from './client-profile.service';

@Module({
  providers: [ClientProfileService],
})
export class ClientProfileModule {}
