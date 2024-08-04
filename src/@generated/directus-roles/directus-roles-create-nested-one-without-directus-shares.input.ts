import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesCreateWithoutDirectus_sharesInput } from './directus-roles-create-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateOrConnectWithoutDirectus_sharesInput } from './directus-roles-create-or-connect-without-directus-shares.input';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';

@InputType()
export class directus_rolesCreateNestedOneWithoutDirectus_sharesInput {
  @Field(() => directus_rolesCreateWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_sharesInput)
  create?: directus_rolesCreateWithoutDirectus_sharesInput;

  @Field(() => directus_rolesCreateOrConnectWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateOrConnectWithoutDirectus_sharesInput)
  connectOrCreate?: directus_rolesCreateOrConnectWithoutDirectus_sharesInput;

  @Field(() => directus_rolesWhereUniqueInput, { nullable: true })
  @Type(() => directus_rolesWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;
}
