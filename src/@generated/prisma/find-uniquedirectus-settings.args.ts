import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsWhereUniqueInput } from '../directus-settings/directus-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusSettingsArgs {

    @Field(() => directus_settingsWhereUniqueInput, {nullable:false})
    @Type(() => directus_settingsWhereUniqueInput)
    where!: directus_settingsWhereUniqueInput;
}
