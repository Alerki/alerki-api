import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsUpdateManyMutationInput } from '../directus-translations/directus-translations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_translationsWhereInput } from '../directus-translations/directus-translations-where.input';

@ArgsType()
export class UpdateManydirectusTranslationsArgs {

    @Field(() => directus_translationsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_translationsUpdateManyMutationInput)
    data!: directus_translationsUpdateManyMutationInput;

    @Field(() => directus_translationsWhereInput, {nullable:true})
    @Type(() => directus_translationsWhereInput)
    where?: directus_translationsWhereInput;
}
