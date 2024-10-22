import { Module } from '@nestjs/common';

import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { LanguageResolver } from './language.resolver';
import { LanguageResolverService } from './language.resolver.service';

@Module({
  providers: [LanguageResolver, LanguageResolverService],
  imports: [CommonPrismaModule, AuthModule],
  exports: [],
})
export class LanguageModule {}
