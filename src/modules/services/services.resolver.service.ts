import { Injectable } from '@nestjs/common';

import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { FindServicesArgs } from './dto';

@Injectable()
export class ServicesResolverService {
  constructor(private readonly commonPrismaService: CommonPrismaService) {}

  async finsServices(
    // select: PrismaSelect,
    args: FindServicesArgs,
  ) {
    return this.commonPrismaService.service.findMany({
      where: {
        status: StatusEnum.PUBLISHED,
        Service_translations: {
          some: {
            ...(args.name
              ? {
                  name: {
                    contains: args.name?.split(' ')?.join(' & '),
                  },
                }
              : {}),
            ...(args.language_code
              ? {
                  languages: {
                    code: args.language_code,
                  },
                }
              : {}),
          },
        },
      },
      include: {
        Service_translations: {
          where: {
            languages: {
              code: args.language_code,
            },
          },
          include: {
            languages: true,
          },
        },
      },
      take: args.take,
      skip: args.skip,
      // ...(select as any),
    });
  }
}
