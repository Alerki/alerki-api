import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateWithoutDirectus_presetsInput } from './directus-roles-create-without-directus-presets.input';

@InputType()
export class directus_rolesCreateOrConnectWithoutDirectus_presetsInput {
  @Field(() => directus_rolesWhereUniqueInput, { nullable: false })
  @Type(() => directus_rolesWhereUniqueInput)
  where!: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;

  @Field(() => directus_rolesCreateWithoutDirectus_presetsInput, {
    nullable: false,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_presetsInput)
  create!: directus_rolesCreateWithoutDirectus_presetsInput;
}
