import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesUpdateWithoutDirectus_sessionsInput } from './directus-shares-update-without-directus-sessions.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateWithoutDirectus_sessionsInput } from './directus-shares-create-without-directus-sessions.input';

@InputType()
export class directus_sharesUpsertWithoutDirectus_sessionsInput {
  @Field(() => directus_sharesUpdateWithoutDirectus_sessionsInput, {
    nullable: false,
  })
  @Type(() => directus_sharesUpdateWithoutDirectus_sessionsInput)
  update!: directus_sharesUpdateWithoutDirectus_sessionsInput;

  @Field(() => directus_sharesCreateWithoutDirectus_sessionsInput, {
    nullable: false,
  })
  @Type(() => directus_sharesCreateWithoutDirectus_sessionsInput)
  create!: directus_sharesCreateWithoutDirectus_sessionsInput;
}
