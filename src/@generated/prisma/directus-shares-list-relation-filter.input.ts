import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesWhereInput } from '../directus-shares/directus-shares-where.input';

@InputType()
export class Directus_sharesListRelationFilter {
  @Field(() => directus_sharesWhereInput, { nullable: true })
  every?: directus_sharesWhereInput;

  @Field(() => directus_sharesWhereInput, { nullable: true })
  some?: directus_sharesWhereInput;

  @Field(() => directus_sharesWhereInput, { nullable: true })
  none?: directus_sharesWhereInput;
}
