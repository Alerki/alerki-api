import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsScalarWhereInput } from './directus-revisions-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_revisionsUpdateManyMutationInput } from './directus-revisions-update-many-mutation.input';

@InputType()
export class directus_revisionsUpdateManyWithWhereWithoutDirectus_activityInput {

    @Field(() => directus_revisionsScalarWhereInput, {nullable:false})
    @Type(() => directus_revisionsScalarWhereInput)
    where!: directus_revisionsScalarWhereInput;

    @Field(() => directus_revisionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_revisionsUpdateManyMutationInput)
    data!: directus_revisionsUpdateManyMutationInput;
}
