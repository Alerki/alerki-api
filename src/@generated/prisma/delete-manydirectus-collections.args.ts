import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsWhereInput } from '../directus-collections/directus-collections-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusCollectionsArgs {

    @Field(() => directus_collectionsWhereInput, {nullable:true})
    @Type(() => directus_collectionsWhereInput)
    where?: directus_collectionsWhereInput;
}
