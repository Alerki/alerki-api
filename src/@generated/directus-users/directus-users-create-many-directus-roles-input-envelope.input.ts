import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateManyDirectus_rolesInput } from './directus-users-create-many-directus-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_usersCreateManyDirectus_rolesInputEnvelope {
  @Field(() => [directus_usersCreateManyDirectus_rolesInput], {
    nullable: false,
  })
  @Type(() => directus_usersCreateManyDirectus_rolesInput)
  data!: Array<directus_usersCreateManyDirectus_rolesInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
