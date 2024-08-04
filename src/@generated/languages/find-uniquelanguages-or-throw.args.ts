import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquelanguagesOrThrowArgs {
  @Field(() => languagesWhereUniqueInput, { nullable: false })
  @Type(() => languagesWhereUniqueInput)
  where!: Prisma.AtLeast<languagesWhereUniqueInput, 'code'>;
}
