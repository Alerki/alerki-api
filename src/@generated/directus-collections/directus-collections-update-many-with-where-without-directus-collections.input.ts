import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsScalarWhereInput } from './directus-collections-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_collectionsUpdateManyMutationInput } from './directus-collections-update-many-mutation.input';

@InputType()
export class directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput {

    @Field(() => directus_collectionsScalarWhereInput, {nullable:false})
    @Type(() => directus_collectionsScalarWhereInput)
    where!: directus_collectionsScalarWhereInput;

    @Field(() => directus_collectionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_collectionsUpdateManyMutationInput)
    data!: directus_collectionsUpdateManyMutationInput;
}
