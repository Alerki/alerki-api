import { MasterProfileService } from '@Module/profile/master-profile.service';
import { ServiceService } from '@Module/service/service.service';
import { CreateMasterServiceDto } from '@Module/user/dto/master.dto';
import { UserDto } from '@Module/user/dto/user.dto';
import { UserPictureService } from '@Module/user/user-picture.service';
import { UserService } from '@Module/user/user.service';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

/**
 * User service
 */
@Injectable()
export class MasterServiceService {
  readonly prismaService = prisma;

  constructor(
    private readonly serviceService: ServiceService,
    private readonly userService: UserService,
  ) { }

  async createMasterService(
    data: CreateMasterServiceDto & Pick<Prisma.User, 'id'>,
  ) {
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

    // Get user ID
    const user = await this.userService.findUserById({ id: data.id });

    const newMasterService = await this.prismaService.masterService.create({
      data: {
        masterId: user.masterProfileId,
        serviceId: service.id,
        currency: data.currency,
        price: data.price,
        duration: data.duration,
        locationLat: data.locationLat,
        locationLng: data.locationLng,
      },
    });

    return newMasterService;
  }

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

  async getMasterService({ id }: Pick<Prisma.MasterProfile, 'id'>) {
    const masterProfile = await this.prismaService.masterProfile.findFirst({
      where: {
        id,
      },
      include: {
        services: true,
      },
    });

    if (!masterProfile) {
      throw new NotFoundException('Master profile not exists not exists');
    }

    return masterProfile.services;
  }
}
