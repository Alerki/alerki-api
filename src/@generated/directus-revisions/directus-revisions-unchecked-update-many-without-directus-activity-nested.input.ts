import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutDirectus_activityInput } from './directus-revisions-create-without-directus-activity.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutDirectus_activityInput } from './directus-revisions-create-or-connect-without-directus-activity.input';
import { directus_revisionsUpsertWithWhereUniqueWithoutDirectus_activityInput } from './directus-revisions-upsert-with-where-unique-without-directus-activity.input';
import { directus_revisionsCreateManyDirectus_activityInputEnvelope } from './directus-revisions-create-many-directus-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { directus_revisionsUpdateWithWhereUniqueWithoutDirectus_activityInput } from './directus-revisions-update-with-where-unique-without-directus-activity.input';
import { directus_revisionsUpdateManyWithWhereWithoutDirectus_activityInput } from './directus-revisions-update-many-with-where-without-directus-activity.input';
import { directus_revisionsScalarWhereInput } from './directus-revisions-scalar-where.input';

@InputType()
export class directus_revisionsUncheckedUpdateManyWithoutDirectus_activityNestedInput {
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

  @Field(
    () => [
      directus_revisionsUpsertWithWhereUniqueWithoutDirectus_activityInput,
    ],
    { nullable: true },
  )
  @Type(
    () => directus_revisionsUpsertWithWhereUniqueWithoutDirectus_activityInput,
  )
  upsert?: Array<directus_revisionsUpsertWithWhereUniqueWithoutDirectus_activityInput>;

  @Field(() => directus_revisionsCreateManyDirectus_activityInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_revisionsCreateManyDirectus_activityInputEnvelope)
  createMany?: directus_revisionsCreateManyDirectus_activityInputEnvelope;

  @Field(() => [directus_revisionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_revisionsWhereUniqueInput)
  set?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_revisionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_revisionsWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_revisionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_revisionsWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

  @Field(() => [directus_revisionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_revisionsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

  @Field(
    () => [
      directus_revisionsUpdateWithWhereUniqueWithoutDirectus_activityInput,
    ],
    { nullable: true },
  )
  @Type(
    () => directus_revisionsUpdateWithWhereUniqueWithoutDirectus_activityInput,
  )
  update?: Array<directus_revisionsUpdateWithWhereUniqueWithoutDirectus_activityInput>;

  @Field(
    () => [directus_revisionsUpdateManyWithWhereWithoutDirectus_activityInput],
    { nullable: true },
  )
  @Type(
    () => directus_revisionsUpdateManyWithWhereWithoutDirectus_activityInput,
  )
  updateMany?: Array<directus_revisionsUpdateManyWithWhereWithoutDirectus_activityInput>;

  @Field(() => [directus_revisionsScalarWhereInput], { nullable: true })
  @Type(() => directus_revisionsScalarWhereInput)
  deleteMany?: Array<directus_revisionsScalarWhereInput>;
}
