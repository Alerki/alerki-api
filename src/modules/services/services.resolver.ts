import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Service } from '../../@generated';
import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { JWTData } from '../auth/interfaces';
import { FindServicesArgs } from './dto';
import { ServicesResolverService } from './services.resolver.service';

@Resolver()
@UseGuards(JwtAuthGuard)
export class ServicesResolver {
  constructor(
    private readonly servicesResolverService: ServicesResolverService,
  ) {}

  @Query(() => [Service])
  async findServices(
    // @Info()
    // info: GraphQLResolveInfo,
    @Args()
    args: FindServicesArgs,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    // const select = new PrismaSelect(info).value;
    return this.servicesResolverService.finsServices(args, user);
  }
}
