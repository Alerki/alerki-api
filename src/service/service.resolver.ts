import { ContextType } from '@nestjs/common';
import { Args, Context, Info, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

import { FindServicesQuery, Services } from './dtos';
import { ServiceModuleService } from './services/service-module.service';

@Resolver()
export class ServiceResolver {
  constructor(private readonly serviceModuleService: ServiceModuleService) {}

  @Query(() => Services)
  async findService(
    @Info()
    info: GraphQLResolveInfo,
    @Args()
    args: FindServicesQuery,
    @Context()
    context: ContextType,
  ): Promise<Services> {
    const select = new PrismaSelect(info).value;
    console.log(args, '<<< args');

    return this.serviceModuleService.findService(
      select?.select?.data?.select,
      args,
      context,
    );
  }
}
