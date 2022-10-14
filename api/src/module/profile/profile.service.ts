import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { RoleService } from '@Module/auth/role.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { UserService } from '@Module/user/user.service';

/**
 * Profile service
 */
@Injectable()
export class ProfileService {
  /**
   * Profile service constructor
   *
   * @param userService user service
   * @param roleService role service
   * @param masterProfileService master profile service
   */
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService,
    private readonly masterProfileService: MasterProfileService,
  ) { }

  /**
   * Enable master
   *
   * @param param0 enable master params
   */
  async enableMaster({ id }: Pick<Prisma.User, 'id'>) {
    const candidate = await this.userService.prismaService.user.findFirst({
      where: {
        id,
      },
      include: {
        roles: true,
      },
    });

    // Check if user exists
    if (!candidate) {
      throw new UnauthorizedException('Bad access token');
    }

    // Check if user is not a master
    const masterRoleId = (await this.roleService.getMasterRole()).id;

    if (candidate.roles.find(
      (role: Prisma.Roles) => role.id === masterRoleId,
    )) {
      throw new BadRequestException('User is already a master');
    }

    // Create data object to update user
    const data: Prisma.Prisma.XOR<
      Prisma.Prisma.UserUpdateInput,
      Prisma.Prisma.UserUncheckedUpdateInput
    > = {
      roles: {
        connect: {
          id: (await this.roleService.getMasterRole()).id,
        },
      },
    };

    // Create master profile if not exists or make it available
    if (!candidate.masterProfileId) {
      const newMasterProfile = await this.masterProfileService.create();

      data.masterProfileId = newMasterProfile.id;
    } else {
      data.masterProfile = {
        update: {
          available: true,
        },
      };
    }

    // Save master profile ID
    await this.userService.prismaService.user.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * Disable master
   *
   * @param param0 disable master params
   */
  async disableMaster({ id }: Pick<Prisma.User, 'id'>) {
    const candidate = await this.userService.prismaService.user.findFirst({
      where: {
        id,
      },
      include: {
        roles: true,
      },
    });

    // Check if user exists
    if (!candidate) {
      throw new UnauthorizedException('Bad access token');
    }

    // Check user is master
    const masterRoleId = (await this.roleService.getMasterRole()).id;

    if (!candidate.roles.find(
      (role: Prisma.Roles) => role.id === masterRoleId,
    )) {
      throw new BadRequestException('User is not a master');
    }

    // Remove master role from user
    // and make master profile not available
    await this.userService.prismaService.user.update({
      where: {
        id,
      },
      data: {
        roles: {
          disconnect: {
            id: masterRoleId,
          },
        },
        masterProfile: {
          update: {
            available: false,
          },
        },
      },
    });
  }
}
