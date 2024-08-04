import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_sessionsInput } from './directus-users-create-without-directus-sessions.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_sessionsInput } from './directus-users-create-or-connect-without-directus-sessions.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersCreateNestedOneWithoutDirectus_sessionsInput {
  @Field(() => directus_usersCreateWithoutDirectus_sessionsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateWithoutDirectus_sessionsInput)
  create?: directus_usersCreateWithoutDirectus_sessionsInput;

  @Field(() => directus_usersCreateOrConnectWithoutDirectus_sessionsInput, {
    nullable: true,
  })
  @Type(() => directus_usersCreateOrConnectWithoutDirectus_sessionsInput)
  connectOrCreate?: directus_usersCreateOrConnectWithoutDirectus_sessionsInput;

  @Field(() => directus_usersWhereUniqueInput, { nullable: true })
  @Type(() => directus_usersWhereUniqueInput)
  connect?: Prisma.AtLeast<
    directus_usersWhereUniqueInput,
    'id' | 'email' | 'token' | 'external_identifier'
  >;
}
