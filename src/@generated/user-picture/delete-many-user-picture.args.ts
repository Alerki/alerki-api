import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureWhereInput } from './user-picture-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserPictureArgs {

    @Field(() => UserPictureWhereInput, {nullable:true})
    @Type(() => UserPictureWhereInput)
    where?: UserPictureWhereInput;
}
