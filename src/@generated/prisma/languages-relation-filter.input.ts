import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereInput } from '../languages/languages-where.input';

@InputType()
export class LanguagesRelationFilter {
  @Field(() => languagesWhereInput, { nullable: true })
  is?: languagesWhereInput;

  @Field(() => languagesWhereInput, { nullable: true })
  isNot?: languagesWhereInput;
}
