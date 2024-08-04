import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_dashboardsScalarWhereInput } from './directus-dashboards-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_dashboardsUpdateManyMutationInput } from './directus-dashboards-update-many-mutation.input';

@InputType()
export class directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput {
  @Field(() => directus_dashboardsScalarWhereInput, { nullable: false })
  @Type(() => directus_dashboardsScalarWhereInput)
  where!: directus_dashboardsScalarWhereInput;

  @Field(() => directus_dashboardsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_dashboardsUpdateManyMutationInput)
  data!: directus_dashboardsUpdateManyMutationInput;
}
