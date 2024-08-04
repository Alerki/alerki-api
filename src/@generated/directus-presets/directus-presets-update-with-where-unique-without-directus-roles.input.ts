import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_presetsWhereUniqueInput } from './directus-presets-where-unique.input';
import { Type } from 'class-transformer';
import { directus_presetsUpdateWithoutDirectus_rolesInput } from './directus-presets-update-without-directus-roles.input';

@InputType()
export class directus_presetsUpdateWithWhereUniqueWithoutDirectus_rolesInput {
  @Field(() => directus_presetsWhereUniqueInput, { nullable: false })
  @Type(() => directus_presetsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>;

  @Field(() => directus_presetsUpdateWithoutDirectus_rolesInput, {
    nullable: false,
  })
  @Type(() => directus_presetsUpdateWithoutDirectus_rolesInput)
  data!: directus_presetsUpdateWithoutDirectus_rolesInput;
}
