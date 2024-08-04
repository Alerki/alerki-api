import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_activityCreateWithoutDirectus_revisionsInput } from './directus-activity-create-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_activityCreateOrConnectWithoutDirectus_revisionsInput } from './directus-activity-create-or-connect-without-directus-revisions.input';
import { Prisma } from '@prisma/client';
import { directus_activityWhereUniqueInput } from './directus-activity-where-unique.input';

@InputType()
export class directus_activityCreateNestedOneWithoutDirectus_revisionsInput {
  @Field(() => directus_activityCreateWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_activityCreateWithoutDirectus_revisionsInput)
  create?: directus_activityCreateWithoutDirectus_revisionsInput;

  @Field(() => directus_activityCreateOrConnectWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_activityCreateOrConnectWithoutDirectus_revisionsInput)
  connectOrCreate?: directus_activityCreateOrConnectWithoutDirectus_revisionsInput;

  @Field(() => directus_activityWhereUniqueInput, { nullable: true })
  @Type(() => directus_activityWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_activityWhereUniqueInput, 'id'>;
}
