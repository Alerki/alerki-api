import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import { MasterProfileService } from '@Src/modules/profile/master-profile.service';
import { ServiceService } from '@Src/modules/service/service.service';
import {
  CreateMasterServiceDto,
  PatchMasterServiceDto,
} from '@Src/modules/user/dto/master.dto';
import { UserService } from '@Src/modules/user/user.service';
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
    private readonly masterProfileService: MasterProfileService,
  ) { }

  /**
   * Find first master service
   *
   * @param data find arguments
   * @returns master service
   */
  async findFirst(data: Prisma.Prisma.MasterServiceFindFirstArgs) {
    return await this.prismaService.masterService.findFirst(data);
  }

  /**
   * Find many
   *
   * @param data find arguments
   * @returns master services
   */
  async findMany(data: Prisma.Prisma.MasterServiceFindManyArgs) {
    return await this.prismaService.masterService.findMany(data);
  }

  /**
   * Get exists master service
   *
   * @param data get arguments
   * @param callback for custom error
   * @returns master service
   */
  async getExists<T extends Prisma.Prisma.MasterServiceFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T, Prisma.Prisma.MasterServiceFindFirstArgs
    >,
    callback?: () => never,
  ) {
    // Check if master exists
    const candidate = await this.prismaService.masterService.findFirst(data);

    if (!candidate) {
      if (!callback) {
        throw new NotFoundException('Master service not exists');
      }

      // istanbul ignore next
      callback();
    }

    return candidate;
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

    // Check if user is master
    const user = await this.userService.getExists({
      where: {
        id: data.id,
      },
    });

    if (!user.masterProfileId) {
      throw new BadRequestException('User is not a master');
    }

    // Check if master service with the name already exists
    const checkMasterService = await this.findFirst({
      where: {
        masterId: user.masterProfileId,
        serviceId: service.id,
      },
    });

    if (checkMasterService) {
      throw new BadRequestException(
        'Master service with specified name already exists',
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

    await this.handleAvailableService({ id: service.id });

    return newMasterService;
  }

  /**
   * Get master service
   *
   * @param param0 get master service arguments
   * @returns
   */
  async getMasterService({ id }: Pick<Prisma.MasterProfile, 'id'>) {
    const masterProfile = await this.masterProfileService.getExists({
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

    return masterProfile.services;
  }

  /**
   * Patch master service
   *
   * @param masterService master service ID
   * @param data patch service data
   * @returns patched service
   */
  async patchMasterService(
    user: Pick<Prisma.User, 'id'>,
    masterService: Pick<Prisma.MasterService, 'id'>,
    data: PatchMasterServiceDto,
  ) {
    // Check if master service exists
    const masterServiceCandidate = await this.getExists({
      where: {
        id: masterService.id,
      },
    });

    // Check if user exists
    const userCandidate = await this.userService.getExists({
      where: {
        id: user.id,
      },
    });

    // Check if the master service belongs to the user
    if (userCandidate.masterProfileId !== masterServiceCandidate.masterId) {
      throw new BadRequestException('The service does not belong to the user');
    }

    // Create object with data to update master service
    let updateData: Prisma.Prisma.MasterServiceUncheckedUpdateInput = {
      available: data.available,
      price: data.price,
      duration: data.duration,
      locationLat: data.locationLat,
      locationLng: data.locationLng,
    };

    // Check if need to update currency
    if (data.currency) {
      const currency = await this.currencyService.getByCode(
        { code: data.currency },
      );

      updateData.currencyId = currency.id;
    }

    // Check if need to update service name
    if (data.name) {
      const service = await this.serviceService.findOrCreate(
        { name: data.name },
      );

      updateData.serviceId = service.id;
    }

    // Update master service and return
    return await this.prismaService.masterService.update({
      where: {
        id: masterService.id,
      },
      data: updateData,
    });
  }

  async delete(
    { id: userId }: Pick<Prisma.User, 'id'>,
    { id: serviceId }: Pick<Prisma.MasterService, 'id'>,
  ) {
    const masterServiceCandidate = await this.getExists({
      where: {
        id: serviceId,
      },
    });

    const userCandidate = await this.userService.getExists({
      where: {
        id: userId,
      },
    });

    if (userCandidate.masterProfileId !== masterServiceCandidate.masterId) {
      throw new BadRequestException('The service not belongs to the user');
    }

    await this.prismaService.masterService.delete({
      where: {
        id: masterServiceCandidate.id,
      },
    });

    await this.handleAvailableService({ id: masterServiceCandidate.serviceId });
  }

  /**
   * Enable or disable service depend on exists master services
   *
   * @param param0 service ID
   * @returns updated service
   */
  async handleAvailableService(
    { id }: Pick<Prisma.Service, 'id'>,
  ) {
    const masterServices = await this.findMany({
      where: {
        serviceId: id,
      },
    });

    if (!masterServices.length) {
      return await this.serviceService.update({
        where: {
          id,
        },
        data: {
          available: false,
        },
      });
    }

    return await this.serviceService.update({
      where: {
        id,
      },
      data: {
        available: true,
      },
    });
  }
}
