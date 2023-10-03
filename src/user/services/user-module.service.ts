import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma from '@prisma/client';
import * as imageSize from 'buffer-image-size';
import * as imageType from 'image-type';
import * as sharp from 'sharp';

import { IJwtTokenData } from '../../auth/interfaces';
import { apiConfig } from '../../config/api.config';
import { MasterProfileService } from '../../master/services/master-profile.service';
import { MasterServiceService } from '../../master/services/master-service.service';
import { MasterWeeklyScheduleService } from '../../master/services/master-weekly-schedule.service';
import { ServiceService } from '../../service/services/service.service';
import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import {
  CreateMasterServiceDto,
  UpdateMasterServiceDto,
} from '../dtos/master.dto';
import { UpdateUserDto } from '../dtos/user.dto';
import { UserService } from './user.service';

@Injectable()
export class UserModuleService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
    private readonly masterProfileService: MasterProfileService,
    private readonly masterServiceService: MasterServiceService,
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
    private readonly serviceService: ServiceService,
  ) { }

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
      include: {
        userEmail: true,
        userPhoneNumber: true,
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

    const updateMasterProfileData: Prisma.Prisma.UserUpdateArgs['data'] = {
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
      serviceCandidate = await this.serviceService.create(data.name);
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
      include: {
        service: true,
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
      include: {
        service: true,
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

    const updateData: Prisma.Prisma.MasterServiceUpdateArgs['data'] = {
      ...otherData,
    };

    if (data.name) {
      let serviceCandidate = await this.serviceService.searchFirstByName(
        data.name,
      );

      if (!serviceCandidate) {
        serviceCandidate = await this.serviceService.create(data.name);
      }

      updateData.serviceId = serviceCandidate.id;
    }

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

  async updateUser(user: IJwtTokenData, data: UpdateUserDto) {
    const candidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
    });

    return this.userService.update({
      where: {
        id: candidate.id,
      },
      data: {
        ...data,
      },
    });
  }

  async getPicture(id: string) {
    const picture = await this.prismaService.userPicture.findFirst({
      where: {
        id,
      },
    });

    if (!picture) {
      throw new NotFoundException('Picture not found');
    }

    return picture;
  }

  async patchUserPicture({
    id,
    picture,
  }: Pick<Prisma.User, 'id'> & { picture: Express.Multer.File }) {
    const candidate = await this.userService.findExists({
      where: {
        id,
      },
    });

    let pictureBuffer: Buffer = picture.buffer;

    // Check picture type
    const pictureType = await imageType(pictureBuffer);

    if (!pictureType) {
      throw new BadRequestException(
        `Validation failed (expected type is ${apiConfig.user.userPictureFormatRegExp.toString()})`,
      );
    }

    // eslint-disable-next-line max-len
    if (!pictureType.ext.match(apiConfig.user.userPictureFormatRegExp)) {
      throw new BadRequestException(
        `Validation failed (expected type is ${apiConfig.user.userPictureFormatRegExp.toString()})`,
      );
    }

    // Check picture size
    const { width, height } = imageSize(pictureBuffer);

    if (width > 100 || height > 100) {
      pictureBuffer = await sharp(picture.buffer)
        .resize(50, 50)
        .jpeg({ mozjpeg: true })
        .toBuffer();
    }

    // If picture already exists delete that and create new one
    if (candidate.pictureId) {
      await this.prismaService.userPicture.delete({
        where: {
          id: candidate.pictureId,
        },
      })
    }

    const updatedUser = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        picture: {
          create: {
            picture: pictureBuffer,
          }
        }
      }
    })

    return updatedUser.pictureId;
  }

  async deletePicture({ id }: Pick<Prisma.UserPicture, 'id'>) {
    const candidate = await this.userService.findExists({
      where: {
        id,
      },
    });

    if (!candidate.pictureId) {
      throw new NotFoundException('Picture not exists');
    }

    await this.prismaService.userPicture.delete({
      where: { id: candidate.pictureId },
    });
  }
}
