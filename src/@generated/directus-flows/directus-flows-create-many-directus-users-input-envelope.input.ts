import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsCreateManyDirectus_usersInput } from './directus-flows-create-many-directus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_flowsCreateManyDirectus_usersInputEnvelope {
  @Field(() => [directus_flowsCreateManyDirectus_usersInput], {
    nullable: false,
  })
  @Type(() => directus_flowsCreateManyDirectus_usersInput)
  data!: Array<directus_flowsCreateManyDirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
