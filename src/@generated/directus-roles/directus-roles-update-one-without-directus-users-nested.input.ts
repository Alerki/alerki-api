import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesCreateWithoutDirectus_usersInput } from './directus-roles-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateOrConnectWithoutDirectus_usersInput } from './directus-roles-create-or-connect-without-directus-users.input';
import { directus_rolesUpsertWithoutDirectus_usersInput } from './directus-roles-upsert-without-directus-users.input';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';
import { directus_rolesUpdateWithoutDirectus_usersInput } from './directus-roles-update-without-directus-users.input';

@InputType()
export class directus_rolesUpdateOneWithoutDirectus_usersNestedInput {
  @Field(() => directus_rolesCreateWithoutDirectus_usersInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_usersInput)
  create?: directus_rolesCreateWithoutDirectus_usersInput;

  @Field(() => directus_rolesCreateOrConnectWithoutDirectus_usersInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateOrConnectWithoutDirectus_usersInput)
  connectOrCreate?: directus_rolesCreateOrConnectWithoutDirectus_usersInput;

  @Field(() => directus_rolesUpsertWithoutDirectus_usersInput, {
    nullable: true,
  })
  @Type(() => directus_rolesUpsertWithoutDirectus_usersInput)
  upsert?: directus_rolesUpsertWithoutDirectus_usersInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_rolesWhereUniqueInput, { nullable: true })
  @Type(() => directus_rolesWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;

  @Field(() => directus_rolesUpdateWithoutDirectus_usersInput, {
    nullable: true,
  })
  @Type(() => directus_rolesUpdateWithoutDirectus_usersInput)
  update?: directus_rolesUpdateWithoutDirectus_usersInput;
}
