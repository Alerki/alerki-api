import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateManyMasterProfileInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => String, {nullable:true})
    picture?: string;

    @Field(() => String, {nullable:false})
    clientProfile!: string;

    @Field(() => String, {nullable:false})
    password!: string;
}
