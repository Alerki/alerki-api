import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsScalarWhereInput } from './directus-versions-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_versionsUpdateManyMutationInput } from './directus-versions-update-many-mutation.input';

@InputType()
export class directus_versionsUpdateManyWithWhereWithoutDirectus_collectionsInput {

    @Field(() => directus_versionsScalarWhereInput, {nullable:false})
    @Type(() => directus_versionsScalarWhereInput)
    where!: directus_versionsScalarWhereInput;

    @Field(() => directus_versionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_versionsUpdateManyMutationInput)
    data!: directus_versionsUpdateManyMutationInput;
}
