import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsWhereUniqueInput } from '../directus-extensions/directus-extensions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_extensionsCreateInput } from '../directus-extensions/directus-extensions-create.input';
import { directus_extensionsUpdateInput } from '../directus-extensions/directus-extensions-update.input';

@ArgsType()
export class UpsertOnedirectusExtensionsArgs {

    @Field(() => directus_extensionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_extensionsWhereUniqueInput)
    where!: directus_extensionsWhereUniqueInput;

    @Field(() => directus_extensionsCreateInput, {nullable:false})
    @Type(() => directus_extensionsCreateInput)
    create!: directus_extensionsCreateInput;

    @Field(() => directus_extensionsUpdateInput, {nullable:false})
    @Type(() => directus_extensionsUpdateInput)
    update!: directus_extensionsUpdateInput;
}
