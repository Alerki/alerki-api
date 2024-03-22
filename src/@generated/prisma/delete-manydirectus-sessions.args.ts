import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsWhereInput } from '../directus-sessions/directus-sessions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusSessionsArgs {

    @Field(() => directus_sessionsWhereInput, {nullable:true})
    @Type(() => directus_sessionsWhereInput)
    where?: directus_sessionsWhereInput;
}
