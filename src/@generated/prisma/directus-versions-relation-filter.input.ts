import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsWhereInput } from '../directus-versions/directus-versions-where.input';

@InputType()
export class Directus_versionsRelationFilter {
  @Field(() => directus_versionsWhereInput, { nullable: true })
  is?: directus_versionsWhereInput;

  @Field(() => directus_versionsWhereInput, { nullable: true })
  isNot?: directus_versionsWhereInput;
}
