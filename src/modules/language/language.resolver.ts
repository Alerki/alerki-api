import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { languages } from '../../@generated';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { LanguageResolverService } from './language.resolver.service';

@Resolver()
@UseGuards(JwtAuthGuard)
export class LanguageResolver {
  constructor(
    private readonly languageResolverService: LanguageResolverService,
  ) {}

  @Query(() => [languages], { nullable: false })
  async getLanguages() {
    return this.languageResolverService.getLanguages();
  }
}
