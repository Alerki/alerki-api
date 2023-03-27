import { Module } from '@nestjs/common';

import { GoogleService } from './google.service';

@Module({
  providers: [GoogleService],
})
export class GoogleModule {}
