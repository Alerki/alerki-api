import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPictureUpdateManyMutationInput } from './user-picture-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserPictureWhereInput } from './user-picture-where.input';

@ArgsType()
export class UpdateManyUserPictureArgs {

    @Field(() => UserPictureUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPictureUpdateManyMutationInput)
    data!: UserPictureUpdateManyMutationInput;

    @Field(() => UserPictureWhereInput, {nullable:true})
    @Type(() => UserPictureWhereInput)
    where?: UserPictureWhereInput;
}
