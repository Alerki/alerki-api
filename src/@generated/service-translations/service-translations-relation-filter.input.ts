import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsWhereInput } from './service-translations-where.input';

@InputType()
export class Service_translationsRelationFilter {
  @Field(() => Service_translationsWhereInput, { nullable: true })
  is?: Service_translationsWhereInput;

  @Field(() => Service_translationsWhereInput, { nullable: true })
  isNot?: Service_translationsWhereInput;
}
