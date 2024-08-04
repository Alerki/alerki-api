import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersUpdateWithoutDirectus_panelsInput } from './directus-users-update-without-directus-panels.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_panelsInput } from './directus-users-create-without-directus-panels.input';

@InputType()
export class directus_usersUpsertWithoutDirectus_panelsInput {
  @Field(() => directus_usersUpdateWithoutDirectus_panelsInput, {
    nullable: false,
  })
  @Type(() => directus_usersUpdateWithoutDirectus_panelsInput)
  update!: directus_usersUpdateWithoutDirectus_panelsInput;

  @Field(() => directus_usersCreateWithoutDirectus_panelsInput, {
    nullable: false,
  })
  @Type(() => directus_usersCreateWithoutDirectus_panelsInput)
  create!: directus_usersCreateWithoutDirectus_panelsInput;
}
