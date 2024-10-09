import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import {
  CreateMasterServiceArgs,
  DeleteMasterServiceArgs,
  UpdateMasterServiceArgs,
} from './dto';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { JWTData } from '../auth/interfaces';
import { StatusEnum } from '../../shared/enums/status.enum';
import { MasterServiceService } from './master-service.service';
import { ProfileService } from '../profile/profile.service';
import { CurrencyService } from '../currency/currency.service';
import { ServicesService } from '../services/services.service';

@Injectable()
export class MasterServiceResolverService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly currencyService: CurrencyService,
    private readonly servicesService: ServicesService,
    private readonly profileService: ProfileService,
    private readonly masterServiceService: MasterServiceService,
  ) {}

  async createMasterService(
    select: PrismaSelect,
    args: CreateMasterServiceArgs,
    { id }: JWTData,
  ) {
    const user = await this.profileService.findValidMasterProfileOrThrow({
      id,
    });

    const service = await this.servicesService.findValidServiceOrThrow({
      id: args.ServiceId,
    });

    const currency = await this.currencyService.findValidCurrencyOrThrow({
      id: args.CurrencyId,
    });

    const masterService =
      await this.commonPrismaService.masterService.findFirst({
        where: {
          MasterProfileId: user.MasterProfileId!,
          ServiceId: service.id,
        },
      });

    if (masterService) {
      throw new BadRequestException('Service already exists');
    }

    return this.commonPrismaService.masterService.create({
      data: {
        status: StatusEnum.PUBLISHED,
        MasterProfileId: user.MasterProfileId!,
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
    await this.profileService.findValidMasterProfileOrThrow({
      id,
    });

    const masterService =
      await this.masterServiceService.findValidMasterServiceOrThrow({
        id: args.id,
      });

    await this.currencyService.findValidCurrencyOrThrow({
      id: args.CurrencyId,
    });

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
    await this.profileService.findValidMasterProfileOrThrow({
      id,
    });

    const masterService =
      await this.masterServiceService.findValidMasterServiceOrThrow({
        id: args.id,
      });

    return this.commonPrismaService.masterService.delete({
      where: {
        id: masterService.id,
      },
    });
  }
}
