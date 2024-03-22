import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserPictureArgs {

    @Field(() => UserPictureWhereUniqueInput, {nullable:false})
    @Type(() => UserPictureWhereUniqueInput)
    where!: Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>;
}
