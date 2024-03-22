import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class directus_translationsWhereInput {

    @Field(() => [directus_translationsWhereInput], {nullable:true})
    AND?: Array<directus_translationsWhereInput>;

    @Field(() => [directus_translationsWhereInput], {nullable:true})
    OR?: Array<directus_translationsWhereInput>;

    @Field(() => [directus_translationsWhereInput], {nullable:true})
    NOT?: Array<directus_translationsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    language?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;
}
