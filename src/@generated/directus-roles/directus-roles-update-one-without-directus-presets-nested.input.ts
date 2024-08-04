import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesCreateWithoutDirectus_presetsInput } from './directus-roles-create-without-directus-presets.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateOrConnectWithoutDirectus_presetsInput } from './directus-roles-create-or-connect-without-directus-presets.input';
import { directus_rolesUpsertWithoutDirectus_presetsInput } from './directus-roles-upsert-without-directus-presets.input';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';
import { directus_rolesUpdateWithoutDirectus_presetsInput } from './directus-roles-update-without-directus-presets.input';

@InputType()
export class directus_rolesUpdateOneWithoutDirectus_presetsNestedInput {
  @Field(() => directus_rolesCreateWithoutDirectus_presetsInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_presetsInput)
  create?: directus_rolesCreateWithoutDirectus_presetsInput;

  @Field(() => directus_rolesCreateOrConnectWithoutDirectus_presetsInput, {
    nullable: true,
  })
  @Type(() => directus_rolesCreateOrConnectWithoutDirectus_presetsInput)
  connectOrCreate?: directus_rolesCreateOrConnectWithoutDirectus_presetsInput;

  @Field(() => directus_rolesUpsertWithoutDirectus_presetsInput, {
    nullable: true,
  })
  @Type(() => directus_rolesUpsertWithoutDirectus_presetsInput)
  upsert?: directus_rolesUpsertWithoutDirectus_presetsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => directus_rolesWhereUniqueInput, { nullable: true })
  @Type(() => directus_rolesWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;

  @Field(() => directus_rolesUpdateWithoutDirectus_presetsInput, {
    nullable: true,
  })
  @Type(() => directus_rolesUpdateWithoutDirectus_presetsInput)
  update?: directus_rolesUpdateWithoutDirectus_presetsInput;
}
