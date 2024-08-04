import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class Service_translationsScalarWhereInput {
  @Field(() => [Service_translationsScalarWhereInput], { nullable: true })
  AND?: Array<Service_translationsScalarWhereInput>;

  @Field(() => [Service_translationsScalarWhereInput], { nullable: true })
  OR?: Array<Service_translationsScalarWhereInput>;

  @Field(() => [Service_translationsScalarWhereInput], { nullable: true })
  NOT?: Array<Service_translationsScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  Service_id?: UuidNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  languages_id?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;
}
