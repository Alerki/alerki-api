import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureWhereInput } from './user-picture-where.input';

@InputType()
export class UserPictureListRelationFilter {

    @Field(() => UserPictureWhereInput, {nullable:true})
    every?: UserPictureWhereInput;

    @Field(() => UserPictureWhereInput, {nullable:true})
    some?: UserPictureWhereInput;

    @Field(() => UserPictureWhereInput, {nullable:true})
    none?: UserPictureWhereInput;
}
