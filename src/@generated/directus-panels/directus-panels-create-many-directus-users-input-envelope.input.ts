import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsCreateManyDirectus_usersInput } from './directus-panels-create-many-directus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_panelsCreateManyDirectus_usersInputEnvelope {
  @Field(() => [directus_panelsCreateManyDirectus_usersInput], {
    nullable: false,
  })
  @Type(() => directus_panelsCreateManyDirectus_usersInput)
  data!: Array<directus_panelsCreateManyDirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
