import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsWhereUniqueInput } from '../service-translations/service-translations-where-unique.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateInput } from '../service-translations/service-translations-create.input';
import { Service_translationsUpdateInput } from '../service-translations/service-translations-update.input';

@ArgsType()
export class UpsertOneServiceTranslationsArgs {

    @Field(() => Service_translationsWhereUniqueInput, {nullable:false})
    @Type(() => Service_translationsWhereUniqueInput)
    where!: Service_translationsWhereUniqueInput;

    @Field(() => Service_translationsCreateInput, {nullable:false})
    @Type(() => Service_translationsCreateInput)
    create!: Service_translationsCreateInput;

    @Field(() => Service_translationsUpdateInput, {nullable:false})
    @Type(() => Service_translationsUpdateInput)
    update!: Service_translationsUpdateInput;
}
