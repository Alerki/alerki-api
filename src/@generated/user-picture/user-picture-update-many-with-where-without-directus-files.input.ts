import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureScalarWhereInput } from './user-picture-scalar-where.input';
import { Type } from 'class-transformer';
import { UserPictureUpdateManyMutationInput } from './user-picture-update-many-mutation.input';

@InputType()
export class UserPictureUpdateManyWithWhereWithoutDirectus_filesInput {

    @Field(() => UserPictureScalarWhereInput, {nullable:false})
    @Type(() => UserPictureScalarWhereInput)
    where!: UserPictureScalarWhereInput;

    @Field(() => UserPictureUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPictureUpdateManyMutationInput)
    data!: UserPictureUpdateManyMutationInput;
}
