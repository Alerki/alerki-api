import { Args, Query, Resolver } from '@nestjs/graphql';

import { FindServicesArgs, ServiceOmitted } from './dto';
import { ServicesResolverService } from './services.resolver.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Resolver()
@UseGuards(JwtAuthGuard)
export class ServicesResolver {
  constructor(
    private readonly servicesResolverService: ServicesResolverService,
  ) {}

  @Query(() => [ServiceOmitted])
  async findServices(
    // @Info()
    // info: GraphQLResolveInfo,
    @Args()
    args: FindServicesArgs,
    // @Context()
    // context: ContextType,
  ) {
    // const select = new PrismaSelect(info).value;
    return this.servicesResolverService.finsServices(args);
  }
}
