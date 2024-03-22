import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { directus_shares } from '../directus-shares/directus-shares.model';
import { directus_users } from '../directus-users/directus-users.model';

@ObjectType()
export class directus_sessions {

    @Field(() => ID, {nullable:false})
    token!: string;

    @Field(() => String, {nullable:true})
    user!: string | null;

    @Field(() => Date, {nullable:false})
    expires!: Date;

    @Field(() => String, {nullable:true})
    ip!: string | null;

    @Field(() => String, {nullable:true})
    user_agent!: string | null;

    @Field(() => String, {nullable:true})
    share!: string | null;

    @Field(() => String, {nullable:true})
    origin!: string | null;

    @Field(() => directus_shares, {nullable:true})
    directus_shares?: directus_shares | null;

    @Field(() => directus_users, {nullable:true})
    directus_users?: directus_users | null;
}
