import { MasterProfileService } from '@Module/profile/master-profile.service';
import { ServiceService } from '@Module/service/service.service';
import { CreateMasterServiceDto } from '@Module/user/dto/master.dto';
import { UserDto } from '@Module/user/dto/user.dto';
import { UserPictureService } from '@Module/user/user-picture.service';
import { UserService } from '@Module/user/user.service';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import Prisma from '@prisma/client';
import { CurrencyService } from '@Shared/services/currency.service';

import { prisma } from '@Shared/services/prisma.service';

/**
 * User service
 */
@Injectable()
export class MasterServiceService {
  readonly prismaService = prisma;

  /**
   * User service constructor
   *
   * @param serviceService service service
   * @param userService user service
   * @param currencyService currency service
   */
  constructor(
    private readonly serviceService: ServiceService,
    private readonly userService: UserService,
    private readonly currencyService: CurrencyService,
  ) { }

  async findFirst(data: Prisma.Prisma.MasterServiceFindFirstArgs) {
    return await this.prismaService.masterService.findFirst(data);
  }

  /**
   * Create master service
   *
   * @param data create master service arguments
   * @returns new master service
   */
  async createMasterService(
    data: CreateMasterServiceDto & Pick<Prisma.User, 'id'>,
  ) {
    // Get currency by code
    const currency = await this.currencyService.getByCode(
      { code: data.currency },
    )!;

    // Get service
    let service = await this.serviceService.findFirst({
      where: {
        name: data.name,
      },
    });

    // Create new service if not found
    if (!service) {
      service = await this.serviceService.create({
        data: {
          name: data.name,
        },
      });
    }

    // Get master profile ID
    const user = await this.userService.findUserById({ id: data.id });

    if (!user.masterProfileId) {
      throw new BadRequestException('User is not a master');
    }

    const checkMasterService = await this.findFirst({
      where: {
        masterId: user.masterProfileId,
        serviceId: service.id,
      },
    });

    if (checkMasterService) {
      throw new BadRequestException(
        'Master service with specified ID already exists',
      );
    }

    // Create new master service
    const newMasterService = await this.prismaService.masterService.create({
      data: {
        masterId: user.masterProfileId,
        serviceId: service.id,
        currencyId: currency.id,
        price: data.price,
        duration: data.duration,
        locationLat: data.locationLat,
        locationLng: data.locationLng,
      },
    });

    return newMasterService;
  }

  /**
   * Get master service protected
   *
   * @param param0 get master service arguments
   * @returns master service
   */
  async getMasterServiceProtected({ id }: Pick<Prisma.User, 'id'>) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
      include: {
        masterProfile: {
          include: {
            services: true,
          },
        },
      },
    });

    if (!user?.masterProfile) {
      throw new BadRequestException('User not exists');
    }

    return user.masterProfile.services;
  }

  /**
   * Get master service
   *
   * @param param0 get master service arguments
   * @returns
   */
  async getMasterService({ id }: Pick<Prisma.MasterProfile, 'id'>) {
    const masterProfile = await this.prismaService.masterProfile.findFirst({
      where: {
        id,
      },
      include: {
        services: {
          include: {
            service: true,
            currency: true,
          },
        },
      },
    });

    if (!masterProfile) {
      throw new NotFoundException('Master profile not exists');
    }

    return masterProfile.services;
  }
}
