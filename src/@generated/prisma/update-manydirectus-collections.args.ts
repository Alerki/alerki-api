import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsUpdateManyMutationInput } from '../directus-collections/directus-collections-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_collectionsWhereInput } from '../directus-collections/directus-collections-where.input';

@ArgsType()
export class UpdateManydirectusCollectionsArgs {

    @Field(() => directus_collectionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_collectionsUpdateManyMutationInput)
    data!: directus_collectionsUpdateManyMutationInput;

    @Field(() => directus_collectionsWhereInput, {nullable:true})
    @Type(() => directus_collectionsWhereInput)
    where?: directus_collectionsWhereInput;
}
