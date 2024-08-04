import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_rolesUpdateWithoutDirectus_sharesInput } from './directus-roles-update-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateWithoutDirectus_sharesInput } from './directus-roles-create-without-directus-shares.input';

@InputType()
export class directus_rolesUpsertWithoutDirectus_sharesInput {
  @Field(() => directus_rolesUpdateWithoutDirectus_sharesInput, {
    nullable: false,
  })
  @Type(() => directus_rolesUpdateWithoutDirectus_sharesInput)
  update!: directus_rolesUpdateWithoutDirectus_sharesInput;

  @Field(() => directus_rolesCreateWithoutDirectus_sharesInput, {
    nullable: false,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_sharesInput)
  create!: directus_rolesCreateWithoutDirectus_sharesInput;
}
