import { Args, Query, Resolver } from '@nestjs/graphql';

import { FindServicesArgs, ServiceOmitted } from './dto';
import { ServicesService } from './services.service';

@Resolver()
export class ServicesResolver {
  constructor(private readonly servicesService: ServicesService) {}

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
    return this.servicesService.finsServices(args);
  }
}
