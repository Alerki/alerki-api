import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientProfileUpdateInput } from './client-profile-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';

@ArgsType()
export class UpdateOneClientProfileArgs {
  @Field(() => ClientProfileUpdateInput, { nullable: false })
  @Type(() => ClientProfileUpdateInput)
  data!: ClientProfileUpdateInput;

  @Field(() => ClientProfileWhereUniqueInput, { nullable: false })
  @Type(() => ClientProfileWhereUniqueInput)
  where!: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;
}
