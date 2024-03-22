import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class UserRoles {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;
}
