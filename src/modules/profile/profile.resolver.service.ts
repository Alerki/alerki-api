import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { JWTData } from '../auth/interfaces';
import { UserService } from '../user/user.service';
import {
  FindManyProfileByServiceIdArgs,
  FindProfileArgs,
  UpdateProfileArgs,
} from './dto';
import { ProfileService } from './profile.service';
import { ProfileValidationService } from './profile-validation.service';

@Injectable()
export class ProfileResolverService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly userService: UserService,
    private readonly profileService: ProfileService,
    private readonly profileValidationService: ProfileValidationService,
  ) {}

  async getProfile({ id }: JWTData, select?: PrismaSelect) {
    // PrismaSelect.mergeDeep(select, {
    // });

    return this.userService.findValidUser(
      {
        id,
      },
      {
        ...(select ? select : {}),
      },
    );
  }

  async findProfile(select: PrismaSelect, args: FindProfileArgs) {
    await this.profileService.findValidMasterProfile({
      username: args.username,
    });

    return this.commonPrismaService.users.findFirst({
      where: {
        username: args.username,
      },
      ...select,
    });
  }

  async findManyMasterProfilesByServiceId(
    select: PrismaSelect,
    args: FindManyProfileByServiceIdArgs,
  ) {
    const users =
      await this.profileService.findManyValidMasterProfilesByServiceId(
        args.ServiceId,
      );

    // PrismaSelect.mergeDeep(select, {
    //   select: {
    //     MasterProfile: {
    //       select: {
    //         MasterServices: {
    //           where: {
    //             ServiceId: args.ServiceId,
    //           },
    //         },
    //       },
    //     },
    //   },
    // });

    return this.commonPrismaService.users.findMany({
      where: {
        id: {
          in: users.map((i) => i.id),
        },
      },
      ...select,
    });
  }

  async updateProfile(
    { id }: JWTData,
    select: PrismaSelect,
    args: UpdateProfileArgs,
  ) {
    const user = await this.userService.findValidUser({
      id,
    });

    return this.commonPrismaService.users.update({
      where: {
        id: user.id,
      },
      data: {
        ...args,
      },
      ...select,
    });
  }

  async enableMasterProfile(select: PrismaSelect, { id }: JWTData) {
    const user = await this.userService.findValidUser(
      {
        id,
      },
      {
        include: {
          MasterProfile: true,
        },
      },
    );
    // TODO: update user roles

    if (!user.MasterProfileId) {
      const newMasterProfile = await this.profileService.createMasterProfile();
      return await this.commonPrismaService.users.update({
        where: {
          id,
        },
        data: {
          MasterProfileId: newMasterProfile.id,
        },
        ...select,
      });
    }

    if (user.MasterProfile?.status === StatusEnum.PUBLISHED) {
      throw new BadRequestException();
    }

    return await this.commonPrismaService.users.update({
      where: {
        id,
      },
      data: {
        MasterProfile: {
          update: {
            status: StatusEnum.PUBLISHED,
            MasterWeeklySchedule: {
              update: {
                status: StatusEnum.PUBLISHED,
              },
            },
          },
        },
      },
      ...select,
    });
  }

  async disableMasterProfile(select: PrismaSelect, { id }: JWTData) {
    const user = await this.userService.findValidUser(
      { id },
      {
        include: {
          MasterProfile: true,
        },
      },
    );

    this.profileValidationService.isMasterProfileDefined(user.MasterProfile);

    if (user.MasterProfile?.status === StatusEnum.ARCHIVED) {
      throw new BadRequestException();
    }

    return this.commonPrismaService.users.update({
      where: {
        id,
      },
      data: {
        MasterProfile: {
          update: {
            status: StatusEnum.ARCHIVED,
            MasterWeeklySchedule: {
              update: {
                status: StatusEnum.ARCHIVED,
              },
            },
          },
        },
      },
      ...select,
    });
  }
}
