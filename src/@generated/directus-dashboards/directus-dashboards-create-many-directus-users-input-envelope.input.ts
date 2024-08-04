import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsCreateManyDirectus_usersInput } from './directus-dashboards-create-many-directus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_dashboardsCreateManyDirectus_usersInputEnvelope {
  @Field(() => [directus_dashboardsCreateManyDirectus_usersInput], {
    nullable: false,
  })
  @Type(() => directus_dashboardsCreateManyDirectus_usersInput)
  data!: Array<directus_dashboardsCreateManyDirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
