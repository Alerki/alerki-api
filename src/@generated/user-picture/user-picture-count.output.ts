import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserPictureCount {

    @Field(() => Int, {nullable:false})
    User?: number;
}
