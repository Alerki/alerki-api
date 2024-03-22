import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsCreateInput } from '../directus-sessions/directus-sessions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusSessionsArgs {

    @Field(() => directus_sessionsCreateInput, {nullable:false})
    @Type(() => directus_sessionsCreateInput)
    data!: directus_sessionsCreateInput;
}
