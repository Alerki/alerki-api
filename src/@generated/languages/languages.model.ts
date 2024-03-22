import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Service_translations } from '../service-translations/service-translations.model';
import { LanguagesCount } from '../prisma/languages-count.output';

@ObjectType()
export class languages {

    @Field(() => ID, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true,defaultValue:'ltr'})
    direction!: string | null;

    @Field(() => [Service_translations], {nullable:true})
    Service_translations?: Array<Service_translations>;

    @Field(() => LanguagesCount, {nullable:false})
    _count?: LanguagesCount;
}
