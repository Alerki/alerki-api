import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateInput } from './service-create.input';
import { ServiceUpdateInput } from './service-update.input';

@ArgsType()
export class UpsertOneServiceArgs {
  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  @Type(() => ServiceWhereUniqueInput)
  where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;

  @Field(() => ServiceCreateInput, { nullable: false })
  @Type(() => ServiceCreateInput)
  create!: ServiceCreateInput;

  @Field(() => ServiceUpdateInput, { nullable: false })
  @Type(() => ServiceUpdateInput)
  update!: ServiceUpdateInput;
}
