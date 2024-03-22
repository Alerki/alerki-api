import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsWhereUniqueInput } from '../service-translations/service-translations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneServiceTranslationsArgs {

    @Field(() => Service_translationsWhereUniqueInput, {nullable:false})
    @Type(() => Service_translationsWhereUniqueInput)
    where!: Service_translationsWhereUniqueInput;
}
