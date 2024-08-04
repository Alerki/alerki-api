import { ContextType, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyServiceTranslationsArgs } from 'src/@generated/prisma/find-many-service-translations.args';
import { Status } from 'src/shared/data/status.data';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { FindServicesQuery } from '../dtos';
import { ServiceService } from './service.service';

@Injectable()
export class ServiceModuleService {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly prismaService: PrismaService,
  ) {}

  async findService(
    select: PrismaSelect,
    args: FindServicesQuery,
    context: ContextType,
  ) {
    console.log(args.name, args?.name?.split(' ')?.join(' & '), '<<< name');
    const condition: Prisma.Service_translationsFindManyArgs = {
      where: {
        name: {
          contains: args?.name?.split(' ')?.join(' & '),
        },
      },
      orderBy: {
        Service: {
          date_created: 'desc',
        },
      },
      // select:
    };

    delete condition.include;
    delete condition.select;

    const data =
      await this.prismaService.service_translations.findMany(condition);

    const count = await this.prismaService.service_translations.count(
      condition as Prisma.Service_translationsCountArgs,
    );

    return {
      count,
      data,
    };
  }

  // async findService(data: GetServicesDto) {
  //   if (data.name) {
  // const services = await this.serviceService.searchByName(
  //       data.name,
  //       data.limit,
  //       data.page,
  //     );

  //     if (services.data.length === 0) {
  //       throw new NotFoundException('Services not exists');
  //     }

  //     return services;
  //   }

  //   const r = await this.prismaService.service_translations.findMany({
  //     where: {
  //       Service: {
  //         status: Status.PUBLISHED
  //       }
  //     },
  //     orderBy: {
  //       Service: {
  //         date_created: 'desc'
  //       }
  //     },
  //     take: data.limit,
  //     skip: data.limit * (data.page - 1),
  //   });

  //   return {
  //     totalNumber: await this.prismaService.service.count({
  //       where: {
  //         Service_translations: {
  //           some: {
  //             Service: {
  //               status: Status.PUBLISHED
  //             }
  //           }
  //         }
  //       },
  //     }),
  //     data: r,
  //   };
  // }

  // async findService(
  //   info: GraphQLResolveInfo,
  //   args: FindServicesQuery,
  //   context: ContextType,
  // ) {
  //   if (args.name) {
  //     return this.serviceService.searchByName(args.name, args.limit, args.page);
  //   }

  //   const data = await this.prismaService.service_translations.findMany({
  //     where: {
  //       Service: {
  //         status: Status.PUBLISHED,
  //       },
  //     },
  //   });

  //   const count = await this.prismaService.service_translations.count({
  //     where: {
  //       Service: {
  //         status: Status.PUBLISHED,
  //       },
  //     },
  //   });

  //   return {
  //     data,
  //     count,
  //   };
  // }

  // async findServiceForMaster(id: number, data: FindMasterServices) {
  //   const r = await this.prismaService.masterService.findMany({
  //     where: {
  //       service: id
  //     },
  //     include: {
  //       MasterProfile: {
  //         include: {
  //           User: {
  //             select: {
  //               firstName: true,
  //               lastName: true,
  //               username: true,
  //               picture: true,
  //             }
  //           }
  //         }
  //       }
  //     },
  //     // orderBy: {
  //     //   createdAt: 'desc',
  //     // },
  //     take: data.limit,
  //     skip: data.limit * (data.page - 1),
  //   });

  //   return {
  //     totalNumber: await this.prismaService.masterService.count({
  //       where: {
  //         // serviceId: id,
  //         service: {
  //           // equals: {
  //           //   id,
  //           // }
  //         },
  //       },
  //     }),
  //     data: r,
  //   };
  // }
}
