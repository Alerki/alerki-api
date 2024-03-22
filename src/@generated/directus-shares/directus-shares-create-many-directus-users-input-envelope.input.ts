import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateManyDirectus_usersInput } from './directus-shares-create-many-directus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_sharesCreateManyDirectus_usersInputEnvelope {

    @Field(() => [directus_sharesCreateManyDirectus_usersInput], {nullable:false})
    @Type(() => directus_sharesCreateManyDirectus_usersInput)
    data!: Array<directus_sharesCreateManyDirectus_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
