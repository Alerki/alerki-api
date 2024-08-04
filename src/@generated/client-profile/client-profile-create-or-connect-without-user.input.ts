import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateWithoutUserInput } from './client-profile-create-without-user.input';

@InputType()
export class ClientProfileCreateOrConnectWithoutUserInput {
  @Field(() => ClientProfileWhereUniqueInput, { nullable: false })
  @Type(() => ClientProfileWhereUniqueInput)
  where!: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;

  @Field(() => ClientProfileCreateWithoutUserInput, { nullable: false })
  @Type(() => ClientProfileCreateWithoutUserInput)
  create!: ClientProfileCreateWithoutUserInput;
}
