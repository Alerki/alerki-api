import { Query, Info, Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';

import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Users } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JWTData } from '../auth/interfaces';
import { FindProfileArgs, UpdateProfileArgs } from './dto';

@Resolver()
@UseGuards(JwtAuthGuard)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Users)
  async getProfile(
    @Info()
    info: GraphQLResolveInfo,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.profileService.getProfile(user, select);
  }

  @Query(() => Users)
  async findProfile(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: FindProfileArgs,
  ) {
    const select = new PrismaSelect(info).value;
    return this.profileService.findProfile(select, args);
  }

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
