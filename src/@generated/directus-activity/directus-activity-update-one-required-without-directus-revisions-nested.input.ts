import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_activityCreateWithoutDirectus_revisionsInput } from './directus-activity-create-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_activityCreateOrConnectWithoutDirectus_revisionsInput } from './directus-activity-create-or-connect-without-directus-revisions.input';
import { directus_activityUpsertWithoutDirectus_revisionsInput } from './directus-activity-upsert-without-directus-revisions.input';
import { Prisma } from '@prisma/client';
import { directus_activityWhereUniqueInput } from './directus-activity-where-unique.input';
import { directus_activityUpdateWithoutDirectus_revisionsInput } from './directus-activity-update-without-directus-revisions.input';

@InputType()
export class directus_activityUpdateOneRequiredWithoutDirectus_revisionsNestedInput {
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

  @Field(() => directus_activityUpsertWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_activityUpsertWithoutDirectus_revisionsInput)
  upsert?: directus_activityUpsertWithoutDirectus_revisionsInput;

  @Field(() => directus_activityWhereUniqueInput, { nullable: true })
  @Type(() => directus_activityWhereUniqueInput)
  connect?: Prisma.AtLeast<directus_activityWhereUniqueInput, 'id'>;

  @Field(() => directus_activityUpdateWithoutDirectus_revisionsInput, {
    nullable: true,
  })
  @Type(() => directus_activityUpdateWithoutDirectus_revisionsInput)
  update?: directus_activityUpdateWithoutDirectus_revisionsInput;
}
