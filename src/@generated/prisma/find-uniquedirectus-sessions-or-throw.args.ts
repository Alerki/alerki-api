import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsWhereUniqueInput } from '../directus-sessions/directus-sessions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusSessionsOrThrowArgs {

    @Field(() => directus_sessionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_sessionsWhereUniqueInput)
    where!: directus_sessionsWhereUniqueInput;
}
