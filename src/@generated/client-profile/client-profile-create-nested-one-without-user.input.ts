import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileCreateWithoutUserInput } from './client-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateOrConnectWithoutUserInput } from './client-profile-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';

@InputType()
export class ClientProfileCreateNestedOneWithoutUserInput {
  @Field(() => ClientProfileCreateWithoutUserInput, { nullable: true })
  @Type(() => ClientProfileCreateWithoutUserInput)
  create?: ClientProfileCreateWithoutUserInput;

  @Field(() => ClientProfileCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => ClientProfileCreateOrConnectWithoutUserInput)
  connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput;

  @Field(() => ClientProfileWhereUniqueInput, { nullable: true })
  @Type(() => ClientProfileWhereUniqueInput)
  connect?: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;
}
