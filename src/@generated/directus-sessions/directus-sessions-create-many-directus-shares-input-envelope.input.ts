import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsCreateManyDirectus_sharesInput } from './directus-sessions-create-many-directus-shares.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_sessionsCreateManyDirectus_sharesInputEnvelope {

    @Field(() => [directus_sessionsCreateManyDirectus_sharesInput], {nullable:false})
    @Type(() => directus_sessionsCreateManyDirectus_sharesInput)
    data!: Array<directus_sessionsCreateManyDirectus_sharesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
