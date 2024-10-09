import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

import { Users } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { JWTData } from '../auth/interfaces';
import { FindProfileArgs, UpdateProfileArgs } from './dto';
import { ProfileResolverService } from './profile.resolver.service';

@Resolver()
@UseGuards(JwtAuthGuard)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileResolverService) {}

  /**
   * This query returns user own profile, so user should be authenticated
   *
   * @param info info
   * @param user user data
   * @returns profile
   */
  @Query(() => Users)
  async getProfile(
    @Info()
    info: GraphQLResolveInfo,
    @GetUserFromRequest()
    user: JWTData,
  ): Promise<Users> {
    const select = new PrismaSelect(info).value;
    return this.profileService.getProfile(user, select);
  }

  /**
   * This query returns master profile by username
   *
   * It checks if:
   * - user exists
   * - user available
   * - master profile available
   * - master profile is fully configured
   *
   * @param info
   * @param args
   * @returns
   */
  @Query(() => Users)
  async findMasterProfile(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: FindProfileArgs,
  ) {
    const select = new PrismaSelect(info).value;
    return this.profileService.findProfile(select, args);
  }

  /**
   * Is can be used to update profile information
   *
   * @param info
   * @param user
   * @param args
   * @returns updated profile
   */
  @Mutation(() => Users)
  async updateProfile(
    @Info()
    info: GraphQLResolveInfo,
    @GetUserFromRequest()
    user: JWTData,
    @Args()
    args: UpdateProfileArgs,
  ) {
    const select = new PrismaSelect(info).value;
    return this.profileService.updateProfile(user, select, args);
  }

  /**
   * This mutation can be used to enable master profile
   *
   * @param info
   * @param user
   * @returns updated profile
   */
  @Mutation(() => Users)
  async enableMasterProfile(
    @Info()
    info: GraphQLResolveInfo,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.profileService.enableMasterProfile(select, user);
  }

  /**
   * This mutation can be used to disable master profile so any client will not be able to interact with this master
   *
   * @param info
   * @param user
   * @returns updated profile
   */
  @Mutation(() => Users)
  async disableMasterProfile(
    @Info()
    info: GraphQLResolveInfo,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.profileService.disableMasterProfile(select, user);
  }
}
