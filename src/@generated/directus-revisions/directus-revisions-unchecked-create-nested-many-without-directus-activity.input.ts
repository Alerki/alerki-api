import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutDirectus_activityInput } from './directus-revisions-create-without-directus-activity.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutDirectus_activityInput } from './directus-revisions-create-or-connect-without-directus-activity.input';
import { directus_revisionsCreateManyDirectus_activityInputEnvelope } from './directus-revisions-create-many-directus-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';

@InputType()
export class directus_revisionsUncheckedCreateNestedManyWithoutDirectus_activityInput {
  @Field(() => [directus_revisionsCreateWithoutDirectus_activityInput], {
    nullable: true,
  })
  @Type(() => directus_revisionsCreateWithoutDirectus_activityInput)
  create?: Array<directus_revisionsCreateWithoutDirectus_activityInput>;

  @Field(
    () => [directus_revisionsCreateOrConnectWithoutDirectus_activityInput],
    { nullable: true },
  )
  @Type(() => directus_revisionsCreateOrConnectWithoutDirectus_activityInput)
  connectOrCreate?: Array<directus_revisionsCreateOrConnectWithoutDirectus_activityInput>;

  @Field(() => directus_revisionsCreateManyDirectus_activityInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_revisionsCreateManyDirectus_activityInputEnvelope)
  createMany?: directus_revisionsCreateManyDirectus_activityInputEnvelope;

  @Field(() => [directus_revisionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_revisionsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;
}
