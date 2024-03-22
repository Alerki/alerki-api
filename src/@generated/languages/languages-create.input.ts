import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateNestedManyWithoutLanguagesInput } from '../service-translations/service-translations-create-nested-many-without-languages.input';

@InputType()
export class languagesCreateInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    direction?: string;

    @Field(() => Service_translationsCreateNestedManyWithoutLanguagesInput, {nullable:true})
    Service_translations?: Service_translationsCreateNestedManyWithoutLanguagesInput;
}
