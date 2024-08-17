import { Query, Info, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';

import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Users } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';

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
}
