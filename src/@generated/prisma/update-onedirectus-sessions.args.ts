import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsUpdateInput } from '../directus-sessions/directus-sessions-update.input';
import { Type } from 'class-transformer';
import { directus_sessionsWhereUniqueInput } from '../directus-sessions/directus-sessions-where-unique.input';

@ArgsType()
export class UpdateOnedirectusSessionsArgs {

    @Field(() => directus_sessionsUpdateInput, {nullable:false})
    @Type(() => directus_sessionsUpdateInput)
    data!: directus_sessionsUpdateInput;

    @Field(() => directus_sessionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_sessionsWhereUniqueInput)
    where!: directus_sessionsWhereUniqueInput;
}
