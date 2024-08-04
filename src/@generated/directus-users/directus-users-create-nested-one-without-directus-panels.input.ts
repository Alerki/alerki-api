import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_panelsInput } from './directus-users-create-without-directus-panels.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_panelsInput } from './directus-users-create-or-connect-without-directus-panels.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_panelsInput {
  @Field(() => directus_usersCreateWithoutDirectus_panelsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateWithoutDirectus_panelsInput)
  create?: directus_usersCreateWithoutDirectus_panelsInput;

  @Field(() => directus_usersCreateOrConnectWithoutDirectus_panelsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateOrConnectWithoutDirectus_panelsInput)
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_panelsInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;
}
