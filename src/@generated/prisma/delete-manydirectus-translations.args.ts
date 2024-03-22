import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsWhereInput } from '../directus-translations/directus-translations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusTranslationsArgs {

    @Field(() => directus_translationsWhereInput, {nullable:true})
    @Type(() => directus_translationsWhereInput)
    where?: directus_translationsWhereInput;
}
