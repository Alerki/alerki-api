import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import { MasterServiceService } from './master-service.service';
import { MasterService } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JWTData } from '../auth/interfaces';
import {
  CreateMasterServiceArgs,
  DeleteMasterServiceArgs,
  UpdateMasterServiceArgs,
} from './dto';
import { PrismaSelect } from '@paljs/plugins';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Resolver()
@UseGuards(JwtAuthGuard)
export class MasterServiceResolver {
  constructor(private readonly masterServiceService: MasterServiceService) {}

  @Mutation(() => MasterService)
  async createMasterService(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: CreateMasterServiceArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.masterServiceService.createMasterService(select, args, user);
  }

  @Mutation(() => MasterService)
  async updateMasterService(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: UpdateMasterServiceArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    const select = new PrismaSelect(info).value;
    return this.masterServiceService.updateMasterService(select, args, user);
  }

  @Mutation(() => Boolean)
  async deleteMasterService(
    @Args()
    args: DeleteMasterServiceArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    return !!this.masterServiceService.deleteMasterService(args, user);
  }
}
