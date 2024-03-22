import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsCreateInput } from '../directus-translations/directus-translations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusTranslationsArgs {

    @Field(() => directus_translationsCreateInput, {nullable:false})
    @Type(() => directus_translationsCreateInput)
    data!: directus_translationsCreateInput;
}
