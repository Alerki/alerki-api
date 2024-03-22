import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ServiceCreateManyDirectus_users_Service_user_createdTodirectus_usersInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => String, {nullable:true})
    user_updated?: string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;
}
