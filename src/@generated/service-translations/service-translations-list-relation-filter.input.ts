import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsWhereInput } from './service-translations-where.input';

@InputType()
export class Service_translationsListRelationFilter {
  @Field(() => Service_translationsWhereInput, { nullable: true })
  every?: Service_translationsWhereInput;

  @Field(() => Service_translationsWhereInput, { nullable: true })
  some?: Service_translationsWhereInput;

  @Field(() => Service_translationsWhereInput, { nullable: true })
  none?: Service_translationsWhereInput;
}
