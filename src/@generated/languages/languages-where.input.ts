import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Service_translationsListRelationFilter } from '../service-translations/service-translations-list-relation-filter.input';

@InputType()
export class languagesWhereInput {

    @Field(() => [languagesWhereInput], {nullable:true})
    AND?: Array<languagesWhereInput>;

    @Field(() => [languagesWhereInput], {nullable:true})
    OR?: Array<languagesWhereInput>;

    @Field(() => [languagesWhereInput], {nullable:true})
    NOT?: Array<languagesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    direction?: StringNullableFilter;

    @Field(() => Service_translationsListRelationFilter, {nullable:true})
    Service_translations?: Service_translationsListRelationFilter;
}
