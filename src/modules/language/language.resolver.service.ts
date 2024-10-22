import { Injectable } from '@nestjs/common';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class LanguageResolverService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async getLanguages() {
    return this.commonPrismaService.languages.findMany();
  }
}
