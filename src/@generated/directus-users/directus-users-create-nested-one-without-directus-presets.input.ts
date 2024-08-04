import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_presetsInput } from './directus-users-create-without-directus-presets.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_presetsInput } from './directus-users-create-or-connect-without-directus-presets.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_presetsInput {
  @Field(() => directus_usersCreateWithoutDirectus_presetsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateWithoutDirectus_presetsInput)
  create?: directus_usersCreateWithoutDirectus_presetsInput;

  @Field(() => directus_usersCreateOrConnectWithoutDirectus_presetsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateOrConnectWithoutDirectus_presetsInput)
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_presetsInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;
}
