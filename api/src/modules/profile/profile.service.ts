import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { RoleService } from '@Src/modules/auth/role.service';
import { MasterProfileService } from '@Src/modules/profile/master-profile.service';
import { UserService } from '@Src/modules/user/user.service';

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
    const candidate = await this.userService.getExists(
      {
        where: {
          id,
        },
        include: {
          picture: true,
        },
      },
      () => {
        throw new UnauthorizedException('Bad access token');
      },
    );

    // Check if user is not a master
    const masterRole = this.roleService.masterRole;

    if (candidate.roles.includes(masterRole)) {
      throw new BadRequestException('User is already a master');
    }

    // Create data object to update user
    const data: Prisma.Prisma.XOR<
      Prisma.Prisma.UserUpdateInput,
      Prisma.Prisma.UserUncheckedUpdateInput
    > = {
      roles: [...candidate.roles, masterRole],
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
    });

    // Check if user exists
    if (!candidate) {
      throw new UnauthorizedException('Bad access token');
    }

    // Check user is master
    const masterRole = this.roleService.masterRole;

    if (!candidate.roles.includes(masterRole)) {
      throw new BadRequestException('User is not a master');
    }

    const roles: any = candidate.roles.filter(
      (role: Prisma.Roles) => role !== masterRole,
    );

    // Remove master role from user
    // and make master profile not available
    await this.userService.prismaService.user.update({
      where: {
        id,
      },
      data: {
        roles,
        masterProfile: {
          update: {
            available: false,
          },
        },
      },
    });
  }
}
