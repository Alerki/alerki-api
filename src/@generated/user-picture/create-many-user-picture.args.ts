import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureCreateManyInput } from './user-picture-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserPictureArgs {

    @Field(() => [UserPictureCreateManyInput], {nullable:false})
    @Type(() => UserPictureCreateManyInput)
    data!: Array<UserPictureCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
