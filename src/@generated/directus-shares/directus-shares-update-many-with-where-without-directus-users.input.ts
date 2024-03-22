import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesScalarWhereInput } from './directus-shares-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_sharesUpdateManyMutationInput } from './directus-shares-update-many-mutation.input';

@InputType()
export class directus_sharesUpdateManyWithWhereWithoutDirectus_usersInput {

    @Field(() => directus_sharesScalarWhereInput, {nullable:false})
    @Type(() => directus_sharesScalarWhereInput)
    where!: directus_sharesScalarWhereInput;

    @Field(() => directus_sharesUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_sharesUpdateManyMutationInput)
    data!: directus_sharesUpdateManyMutationInput;
}
