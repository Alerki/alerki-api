import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsCreateManyDirectus_usersInput } from './directus-sessions-create-many-directus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_sessionsCreateManyDirectus_usersInputEnvelope {

    @Field(() => [directus_sessionsCreateManyDirectus_usersInput], {nullable:false})
    @Type(() => directus_sessionsCreateManyDirectus_usersInput)
    data!: Array<directus_sessionsCreateManyDirectus_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
