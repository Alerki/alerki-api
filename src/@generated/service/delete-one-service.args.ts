import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneServiceArgs {
  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  @Type(() => ServiceWhereUniqueInput)
  where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;
}
