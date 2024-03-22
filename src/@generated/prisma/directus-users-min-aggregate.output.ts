import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Directus_usersMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => String, {nullable:true})
    tfa_secret?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    last_access?: Date | string;

    @Field(() => String, {nullable:true})
    last_page?: string;

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => String, {nullable:true})
    external_identifier?: string;

    @Field(() => Boolean, {nullable:true})
    email_notifications?: boolean;

    @Field(() => String, {nullable:true})
    appearance?: string;

    @Field(() => String, {nullable:true})
    theme_dark?: string;

    @Field(() => String, {nullable:true})
    theme_light?: string;
}
