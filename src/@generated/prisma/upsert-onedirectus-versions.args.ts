import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsWhereUniqueInput } from '../directus-versions/directus-versions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateInput } from '../directus-versions/directus-versions-create.input';
import { directus_versionsUpdateInput } from '../directus-versions/directus-versions-update.input';

@ArgsType()
export class UpsertOnedirectusVersionsArgs {

    @Field(() => directus_versionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_versionsWhereUniqueInput)
    where!: directus_versionsWhereUniqueInput;

    @Field(() => directus_versionsCreateInput, {nullable:false})
    @Type(() => directus_versionsCreateInput)
    create!: directus_versionsCreateInput;

    @Field(() => directus_versionsUpdateInput, {nullable:false})
    @Type(() => directus_versionsUpdateInput)
    update!: directus_versionsUpdateInput;
}
