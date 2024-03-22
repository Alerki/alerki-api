import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_settingsWhereUniqueInput } from '../directus-settings/directus-settings-where-unique.input';
import { Type } from 'class-transformer';
import { directus_settingsCreateInput } from '../directus-settings/directus-settings-create.input';
import { directus_settingsUpdateInput } from '../directus-settings/directus-settings-update.input';

@ArgsType()
export class UpsertOnedirectusSettingsArgs {

    @Field(() => directus_settingsWhereUniqueInput, {nullable:false})
    @Type(() => directus_settingsWhereUniqueInput)
    where!: directus_settingsWhereUniqueInput;

    @Field(() => directus_settingsCreateInput, {nullable:false})
    @Type(() => directus_settingsCreateInput)
    create!: directus_settingsCreateInput;

    @Field(() => directus_settingsUpdateInput, {nullable:false})
    @Type(() => directus_settingsUpdateInput)
    update!: directus_settingsUpdateInput;
}
