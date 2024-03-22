import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsUpdateInput } from '../directus-revisions/directus-revisions-update.input';
import { Type } from 'class-transformer';
import { directus_revisionsWhereUniqueInput } from '../directus-revisions/directus-revisions-where-unique.input';

@ArgsType()
export class UpdateOnedirectusRevisionsArgs {

    @Field(() => directus_revisionsUpdateInput, {nullable:false})
    @Type(() => directus_revisionsUpdateInput)
    data!: directus_revisionsUpdateInput;

    @Field(() => directus_revisionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_revisionsWhereUniqueInput)
    where!: directus_revisionsWhereUniqueInput;
}
