import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsUpdateManyMutationInput } from '../directus-revisions/directus-revisions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_revisionsWhereInput } from '../directus-revisions/directus-revisions-where.input';

@ArgsType()
export class UpdateManydirectusRevisionsArgs {

    @Field(() => directus_revisionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_revisionsUpdateManyMutationInput)
    data!: directus_revisionsUpdateManyMutationInput;

    @Field(() => directus_revisionsWhereInput, {nullable:true})
    @Type(() => directus_revisionsWhereInput)
    where?: directus_revisionsWhereInput;
}
