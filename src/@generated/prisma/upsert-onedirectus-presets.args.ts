import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsWhereUniqueInput } from '../directus-presets/directus-presets-where-unique.input';
import { Type } from 'class-transformer';
import { directus_presetsCreateInput } from '../directus-presets/directus-presets-create.input';
import { directus_presetsUpdateInput } from '../directus-presets/directus-presets-update.input';

@ArgsType()
export class UpsertOnedirectusPresetsArgs {

    @Field(() => directus_presetsWhereUniqueInput, {nullable:false})
    @Type(() => directus_presetsWhereUniqueInput)
    where!: directus_presetsWhereUniqueInput;

    @Field(() => directus_presetsCreateInput, {nullable:false})
    @Type(() => directus_presetsCreateInput)
    create!: directus_presetsCreateInput;

    @Field(() => directus_presetsUpdateInput, {nullable:false})
    @Type(() => directus_presetsUpdateInput)
    update!: directus_presetsUpdateInput;
}
