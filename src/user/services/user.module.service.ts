import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { IJwtTokenData } from '../../auth/interfaces';
import { MasterProfileService } from '../../master/services/master-profile.service';
import { MasterServiceService } from '../../master/services/master-service.service';
import { ServiceService } from '../../service/services/service.service';
import {
  CreateMasterServiceDto,
  UpdateMasterServiceDto,
} from '../dtos/master-service.dto';
import { UserService } from './user.service';

@Injectable()
export class UserModuleService {
  constructor(
    private readonly userService: UserService,
    private readonly masterProfileService: MasterProfileService,
    private readonly masterServiceService: MasterServiceService,
    private readonly serviceService: ServiceService,
  ) {}

  async getUser(username: string) {
    return this.userService.findFirst({
      where: {
        username,
      },
    });
  }

  async getProtectedUser(data: IJwtTokenData) {
    return this.userService.findFirst({
      where: {
        id: data.id,
      },
    });
  }

  async enableMaster(user: IJwtTokenData) {
    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
    });

    if (userCandidate.isMaster) {
      throw new BadRequestException('User already is master');
    }

    const updateMasterProfileData: Prisma.UserUpdateArgs['data'] = {
      isMaster: true,
    };

    // If master profile for specific user not exists then create new one
    if (!userCandidate.masterProfileId) {
      const newMasterProfile = await this.masterProfileService.create({
        data: {},
      });

      updateMasterProfileData.masterProfileId = newMasterProfile.id;
    }

    await this.userService.update({
      where: {
        id: user.id,
      },
      data: updateMasterProfileData,
    });
  }

  async disableMaster(user: IJwtTokenData) {
    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
    });

    if (!userCandidate.isMaster || !userCandidate.masterProfileId) {
      throw new BadRequestException('User is not a master');
    }

    await this.masterProfileService.update({
      where: {
        id: userCandidate.masterProfileId,
      },
      data: {
        available: false,
      },
    });

    await this.userService.update({
      where: {
        id: userCandidate.id,
      },
      data: {
        isMaster: false,
      },
    });
  }

  async createMasterService(user: IJwtTokenData, data: CreateMasterServiceDto) {
    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
      select: {
        masterProfileId: true,
      },
    });

    if (!userCandidate.masterProfileId) {
      throw new BadRequestException('User is not a master');
    }

    const serviceCandidate = await this.serviceService.findExists({
      where: {
        id: data.serviceId,
      },
    });

    const checkIfNotExists = await this.masterServiceService.findFirst({
      where: {
        masterProfileId: userCandidate.masterProfileId,
        serviceId: serviceCandidate.id,
      },
    });

    if (checkIfNotExists) {
      throw new BadRequestException(
        'Master service with this service already exists',
      );
    }

    return this.masterServiceService.create({
      data: {
        ...data,
        serviceId: serviceCandidate.id,
        masterProfileId: userCandidate.masterProfileId,
      },
    });
  }

  async getOwnMasterServices(user: IJwtTokenData) {
    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
      select: {
        masterProfileId: true,
      },
    });

    if (!userCandidate.isMaster || !userCandidate.masterProfileId) {
      throw new BadRequestException('User is not a master');
    }

    return this.masterServiceService.findMany({
      where: {
        masterProfileId: userCandidate.masterProfileId,
      },
    });
  }

  async getMasterServicesByMasterId(id: string) {
    const masterCandidate = await this.masterProfileService.findExists({
      where: {
        id,
      },
    });

    if (!masterCandidate.available) {
      throw new BadRequestException('User is not a master');
    }

    return this.masterServiceService.findMany({
      where: {
        masterProfileId: masterCandidate.id,
      },
    });
  }

  async updateMasterService(
    serviceId: string,
    user: IJwtTokenData,
    data: UpdateMasterServiceDto,
  ) {
    const masterServiceCandidate = await this.masterServiceService.findExists({
      where: {
        id: serviceId,
      },
    });

    if (data.serviceId !== masterServiceCandidate.serviceId) {
      await this.serviceService.findExists({
        where: {
          id: data.serviceId,
        },
      });
    }

    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
      select: {
        masterProfileId: true,
      },
    });

    if (!userCandidate.isMaster || !userCandidate.masterProfileId) {
      throw new BadRequestException('User is not a master');
    }

    if (
      masterServiceCandidate.masterProfileId !== userCandidate.masterProfileId
    ) {
      throw new BadRequestException('This service not belongs to the user');
    }

    return this.masterServiceService.update({
      where: {
        id: masterServiceCandidate.id,
      },
      data,
    });
  }

  async deleteMasterService(serviceId: string, user: IJwtTokenData) {
    const masterServiceCandidate = await this.masterServiceService.findExists({
      where: {
        id: serviceId,
      },
    });

    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
      select: {
        masterProfileId: true,
      },
    });

    if (
      masterServiceCandidate.masterProfileId !== userCandidate.masterProfileId
    ) {
      throw new BadRequestException('This service not belongs to the user');
    }

    await this.masterServiceService.delete({
      where: {
        id: masterServiceCandidate.id,
      },
    });
  }
}
