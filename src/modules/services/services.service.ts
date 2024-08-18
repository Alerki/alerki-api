import { BadRequestException, Injectable } from '@nestjs/common';

import { FindServicesArgs } from './dto';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';

@Injectable()
export class ServicesService {
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

  async findServiceById(id: string) {
    return this.commonPrismaService.service.findFirst({
      where: {
        id,
      },
    });
  }

  async findExistsServiceById(id: string) {
    const service = await this.findServiceById(id);

    if (!service) {
      throw new BadRequestException('User not exists');
    }

    return service;
  }
}
