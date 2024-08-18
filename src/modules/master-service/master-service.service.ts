import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import {
  CreateMasterServiceArgs,
  DeleteMasterServiceArgs,
  UpdateMasterServiceArgs,
} from './dto';
import { JWTData } from '../auth/interfaces';
import { StatusEnum } from '../../shared/enums/status.enum';
import { ServicesService } from '../services/services.service';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class MasterServiceService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly servicesService: ServicesService,
    private readonly currencyService: CurrencyService,
  ) {}

  async createMasterService(
    select: PrismaSelect,
    args: CreateMasterServiceArgs,
    { id }: JWTData,
  ) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
        status: StatusEnum.PUBLISHED,
      },
      include: {
        MasterProfile: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User is not exists');
    }
    if (
      !user.MasterProfileId ||
      user.MasterProfile?.status !== StatusEnum.PUBLISHED
    ) {
      throw new BadRequestException('User is not a master');
    }

    const service = await this.servicesService.findExistsServiceById(
      args.ServiceId,
    );

    const currency = await this.currencyService.getExistingCurrencyById(
      args.CurrencyId,
    );

    const masterService =
      await this.commonPrismaService.masterService.findFirst({
        where: {
          MasterProfileId: user.MasterProfileId,
          ServiceId: service.id,
        },
      });

    if (masterService) {
      throw new BadRequestException('Service already exists');
    }

    return this.commonPrismaService.masterService.create({
      data: {
        status: StatusEnum.PUBLISHED,
        MasterProfileId: user.MasterProfileId,
        ServiceId: service.id,
        CurrencyId: currency.id,
        duration: args.duration,
        price: args.price,
      },
      ...select,
    });
  }

  async updateMasterService(
    select: PrismaSelect,
    args: UpdateMasterServiceArgs,
    { id }: JWTData,
  ) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
        status: StatusEnum.PUBLISHED,
      },
      include: {
        MasterProfile: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User is not exists');
    }
    if (
      !user.MasterProfileId ||
      user.MasterProfile?.status !== StatusEnum.PUBLISHED
    ) {
      throw new BadRequestException('User is not a master');
    }

    const masterService = await this.findExistingMasterServiceById(args.id);

    await this.currencyService.getExistingCurrencyById(args.CurrencyId);

    return this.commonPrismaService.masterService.update({
      where: {
        id: masterService.id,
      },
      data: {
        ...args,
      },
      ...select,
    });
  }

  async deleteMasterService(args: DeleteMasterServiceArgs, { id }: JWTData) {
    const user = await this.commonPrismaService.users.findFirst({
      where: {
        id,
        status: StatusEnum.PUBLISHED,
      },
      include: {
        MasterProfile: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User is not exists');
    }
    if (
      !user.MasterProfileId ||
      user.MasterProfile?.status !== StatusEnum.PUBLISHED
    ) {
      throw new BadRequestException('User is not a master');
    }

    const masterService = await this.findExistingMasterServiceById(args.id);

    return this.commonPrismaService.masterService.delete({
      where: {
        id: masterService.id,
      },
    });
  }

  async findMasterServiceById(id: string) {
    return this.commonPrismaService.masterService.findFirst({
      where: {
        id,
        status: StatusEnum.PUBLISHED,
      },
    });
  }

  async findExistingMasterServiceById(id: string) {
    const masterService = await this.findMasterServiceById(id);

    if (!masterService) {
      throw new BadRequestException('Master service is not exists');
    }

    return masterService;
  }
}
