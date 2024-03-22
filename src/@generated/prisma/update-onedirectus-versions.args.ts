import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsUpdateInput } from '../directus-versions/directus-versions-update.input';
import { Type } from 'class-transformer';
import { directus_versionsWhereUniqueInput } from '../directus-versions/directus-versions-where-unique.input';

@ArgsType()
export class UpdateOnedirectusVersionsArgs {

    @Field(() => directus_versionsUpdateInput, {nullable:false})
    @Type(() => directus_versionsUpdateInput)
    data!: directus_versionsUpdateInput;

    @Field(() => directus_versionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_versionsWhereUniqueInput)
    where!: directus_versionsWhereUniqueInput;
}
