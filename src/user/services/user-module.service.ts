import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { IJwtTokenData } from '../../auth/interfaces';
import { MasterProfileService } from '../../master/services/master-profile.service';
import { MasterServiceService } from '../../master/services/master-service.service';
import { MasterWeeklyScheduleService } from '../../master/services/master-weekly-schedule.service';
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
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
    private readonly serviceService: ServiceService,
  ) {}

  async getUser(username: string) {
    const user = await this.userService.findExists({
      where: {
        username,
      },
    });

    const { password, ...data } = user;

    return data;
  }

  async getProtectedUser(data: IJwtTokenData) {
    const user = await this.userService.findExists({
      where: {
        id: data.id,
      },
    });

    const { password, ...userData } = user;

    return userData;
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
      const startAt = new Date();
      startAt.setUTCHours(9);
      startAt.setUTCMinutes(0);
      startAt.setUTCSeconds(0);
      startAt.setUTCMilliseconds(0);

      const endAt = new Date(startAt);
      endAt.setHours(17);

      const newWeeklySchedule = await this.masterWeeklyScheduleService.create({
        data: {
          startAt,
          endAt,
        },
      });

      const newMasterProfile = await this.masterProfileService.create({
        data: {
          weeklyScheduleId: newWeeklySchedule.id,
        },
      });

      updateMasterProfileData.masterProfileId = newMasterProfile.id;
    } else {
      await this.masterProfileService.update({
        where: {
          id: userCandidate.masterProfileId,
        },
        data: {
          available: true,
        },
      });
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

    let serviceCandidate = await this.serviceService.searchFirstByName(
      data.name,
    );

    if (!serviceCandidate) {
      serviceCandidate = await this.serviceService.create({
        data: {
          name: data.name,
        },
      });
    }

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
        duration: data.duration,
        currency: data.currency,
        price: data.price,
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
        isMaster: true,
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
      throw new BadRequestException('Master is not available');
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

    const { name, ...otherData } = data;

    const updateData: Prisma.MasterServiceUpdateArgs['data'] = {
      ...otherData,
    };

    if (data.name) {
      let serviceCandidate = await this.serviceService.searchFirstByName(
        data.name,
      );

      if (!serviceCandidate) {
        serviceCandidate = await this.serviceService.create({
          data: {
            name: data.name,
          },
        });
      }

      updateData.serviceId = serviceCandidate.id;
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
      data: updateData,
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
