import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';
import { SessionCreateInput } from './session-create.input';
import { SessionUpdateInput } from './session-update.input';

@ArgsType()
export class UpsertOneSessionArgs {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  @Type(() => SessionWhereUniqueInput)
  where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id'>;

  @Field(() => SessionCreateInput, { nullable: false })
  @Type(() => SessionCreateInput)
  create!: SessionCreateInput;

  @Field(() => SessionUpdateInput, { nullable: false })
  @Type(() => SessionUpdateInput)
  update!: SessionUpdateInput;
}
