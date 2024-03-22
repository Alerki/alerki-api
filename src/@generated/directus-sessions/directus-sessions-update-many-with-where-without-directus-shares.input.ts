import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsScalarWhereInput } from './directus-sessions-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_sessionsUpdateManyMutationInput } from './directus-sessions-update-many-mutation.input';

@InputType()
export class directus_sessionsUpdateManyWithWhereWithoutDirectus_sharesInput {

    @Field(() => directus_sessionsScalarWhereInput, {nullable:false})
    @Type(() => directus_sessionsScalarWhereInput)
    where!: directus_sessionsScalarWhereInput;

    @Field(() => directus_sessionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_sessionsUpdateManyMutationInput)
    data!: directus_sessionsUpdateManyMutationInput;
}
