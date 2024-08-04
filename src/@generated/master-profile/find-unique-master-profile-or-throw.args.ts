import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMasterProfileOrThrowArgs {
  @Field(() => MasterProfileWhereUniqueInput, { nullable: false })
  @Type(() => MasterProfileWhereUniqueInput)
  where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;
}
