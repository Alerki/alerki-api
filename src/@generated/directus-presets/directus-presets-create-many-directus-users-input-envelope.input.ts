import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsCreateManyDirectus_usersInput } from './directus-presets-create-many-directus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_presetsCreateManyDirectus_usersInputEnvelope {
  @Field(() => [directus_presetsCreateManyDirectus_usersInput], {
    nullable: false,
  })
  @Type(() => directus_presetsCreateManyDirectus_usersInput)
  data!: Array<directus_presetsCreateManyDirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
