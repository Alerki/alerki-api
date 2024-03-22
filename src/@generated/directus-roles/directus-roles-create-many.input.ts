import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_rolesCreateManyInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    ip_access?: string;

    @Field(() => Boolean, {nullable:true})
    enforce_tfa?: boolean;

    @Field(() => Boolean, {nullable:true})
    admin_access?: boolean;

    @Field(() => Boolean, {nullable:true})
    app_access?: boolean;
}
