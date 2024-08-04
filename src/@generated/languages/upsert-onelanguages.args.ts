import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateInput } from './languages-create.input';
import { languagesUpdateInput } from './languages-update.input';

@ArgsType()
export class UpsertOnelanguagesArgs {
  @Field(() => languagesWhereUniqueInput, { nullable: false })
  @Type(() => languagesWhereUniqueInput)
  where!: Prisma.AtLeast<languagesWhereUniqueInput, 'code'>;

  @Field(() => languagesCreateInput, { nullable: false })
  @Type(() => languagesCreateInput)
  create!: languagesCreateInput;

  @Field(() => languagesUpdateInput, { nullable: false })
  @Type(() => languagesUpdateInput)
  update!: languagesUpdateInput;
}
