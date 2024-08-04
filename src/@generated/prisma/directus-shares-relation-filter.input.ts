import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesWhereInput } from '../directus-shares/directus-shares-where.input';

@InputType()
export class Directus_sharesRelationFilter {
  @Field(() => directus_sharesWhereInput, { nullable: true })
  is?: directus_sharesWhereInput;

  @Field(() => directus_sharesWhereInput, { nullable: true })
  isNot?: directus_sharesWhereInput;
}
