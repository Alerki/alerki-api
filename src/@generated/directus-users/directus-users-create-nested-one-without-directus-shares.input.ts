import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_sharesInput } from './directus-users-create-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_sharesInput } from './directus-users-create-or-connect-without-directus-shares.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_sharesInput {
  @Field(() => directus_usersCreateWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateWithoutDirectus_sharesInput)
  create?: directus_usersCreateWithoutDirectus_sharesInput;

  @Field(() => directus_usersCreateOrConnectWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateOrConnectWithoutDirectus_sharesInput)
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_sharesInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;
}
