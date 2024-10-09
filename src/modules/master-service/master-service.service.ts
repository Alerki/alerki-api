import { Injectable } from '@nestjs/common';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { MasterService, Prisma } from '@prisma/client';
import { MasterServiceValidationService } from './master-service-validation.service';

@Injectable()
export class MasterServiceService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly masterServiceValidationService: MasterServiceValidationService,
  ) {}

  async findValidMasterService<ArgsT extends Prisma.MasterServiceFindFirstArgs>(
    where: Pick<MasterService, 'id'>,
    args?: ArgsT,
  ) {
    try {
      const masterService = await this.findValidMasterServiceOrThrow(
        where,
        args,
      );
      return masterService;
    } catch (e) {
      return undefined;
    }
  }

  async findValidMasterServiceOrThrow<
    ArgsT extends Prisma.MasterServiceFindFirstArgs,
  >(where: Pick<MasterService, 'id'>, args?: ArgsT) {
    const masterService =
      await this.commonPrismaService.masterService.findFirst({
        where,
        ...args,
      });

    this.masterServiceValidationService.isMasterServiceDefined(
      masterService,
      true,
    );
    this.masterServiceValidationService.isMasterServicePublished(
      masterService,
      true,
    );

    return masterService! as Prisma.MasterServiceGetPayload<ArgsT>;
  }
}
