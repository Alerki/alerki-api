import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureCreateInput } from './user-picture-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserPictureArgs {

    @Field(() => UserPictureCreateInput, {nullable:false})
    @Type(() => UserPictureCreateInput)
    data!: UserPictureCreateInput;
}
