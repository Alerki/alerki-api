import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsUpdateManyMutationInput } from '../directus-sessions/directus-sessions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_sessionsWhereInput } from '../directus-sessions/directus-sessions-where.input';

@ArgsType()
export class UpdateManydirectusSessionsArgs {

    @Field(() => directus_sessionsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_sessionsUpdateManyMutationInput)
    data!: directus_sessionsUpdateManyMutationInput;

    @Field(() => directus_sessionsWhereInput, {nullable:true})
    @Type(() => directus_sessionsWhereInput)
    where?: directus_sessionsWhereInput;
}
