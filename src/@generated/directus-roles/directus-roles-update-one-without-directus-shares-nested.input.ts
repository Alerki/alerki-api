import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesCreateWithoutDirectus_sharesInput } from './directus-roles-create-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateOrConnectWithoutDirectus_sharesInput } from './directus-roles-create-or-connect-without-directus-shares.input';
import { directus_rolesUpsertWithoutDirectus_sharesInput } from './directus-roles-upsert-without-directus-shares.input';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';
import { directus_rolesUpdateWithoutDirectus_sharesInput } from './directus-roles-update-without-directus-shares.input';

@InputType()
export class directus_rolesUpdateOneWithoutDirectus_sharesNestedInput {
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

  @Field(() => directus_rolesUpsertWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_rolesUpsertWithoutDirectus_sharesInput)
  upsert?: directus_rolesUpsertWithoutDirectus_sharesInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_rolesWhereUniqueInput, { nullable: true })
  @Type(() => directus_rolesWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;

  @Field(() => directus_rolesUpdateWithoutDirectus_sharesInput, {
    nullable: true,
  })
  @Type(() => directus_rolesUpdateWithoutDirectus_sharesInput)
  update?: directus_rolesUpdateWithoutDirectus_sharesInput;
}
