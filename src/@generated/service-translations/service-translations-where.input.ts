import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MasterServiceListRelationFilter } from '../master-service/master-service-list-relation-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { ServiceRelationFilter } from '../service/service-relation-filter.input';

@InputType()
export class Service_translationsWhereInput {
  @Field(() => [Service_translationsWhereInput], { nullable: true })
  AND?: Array<Service_translationsWhereInput>;

  @Field(() => [Service_translationsWhereInput], { nullable: true })
  OR?: Array<Service_translationsWhereInput>;

  @Field(() => [Service_translationsWhereInput], { nullable: true })
  NOT?: Array<Service_translationsWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  Service_id?: UuidNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  languages_id?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => MasterServiceListRelationFilter, { nullable: true })
  MasterService?: MasterServiceListRelationFilter;

  @Field(() => LanguagesRelationFilter, { nullable: true })
  languages?: LanguagesRelationFilter;

  @Field(() => ServiceRelationFilter, { nullable: true })
  Service?: ServiceRelationFilter;
}
