import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsCreateManyInput } from '../directus-sessions/directus-sessions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusSessionsArgs {

    @Field(() => [directus_sessionsCreateManyInput], {nullable:false})
    @Type(() => directus_sessionsCreateManyInput)
    data!: Array<directus_sessionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
