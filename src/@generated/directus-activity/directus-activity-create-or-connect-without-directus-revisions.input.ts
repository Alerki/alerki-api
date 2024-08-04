import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_activityWhereUniqueInput } from './directus-activity-where-unique.input';
import { Type } from 'class-transformer';
import { directus_activityCreateWithoutDirectus_revisionsInput } from './directus-activity-create-without-directus-revisions.input';

@InputType()
export class directus_activityCreateOrConnectWithoutDirectus_revisionsInput {
  @Field(() => directus_activityWhereUniqueInput, { nullable: false })
  @Type(() => directus_activityWhereUniqueInput)
  where!: Prisma.AtLeast<directus_activityWhereUniqueInput, 'id'>;

  @Field(() => directus_activityCreateWithoutDirectus_revisionsInput, {
    nullable: false,
  })
  @Type(() => directus_activityCreateWithoutDirectus_revisionsInput)
  create!: directus_activityCreateWithoutDirectus_revisionsInput;
}
