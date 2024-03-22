import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureCreateWithoutDirectus_filesInput } from './user-picture-create-without-directus-files.input';
import { Type } from 'class-transformer';
import { UserPictureCreateOrConnectWithoutDirectus_filesInput } from './user-picture-create-or-connect-without-directus-files.input';
import { UserPictureCreateManyDirectus_filesInputEnvelope } from './user-picture-create-many-directus-files-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserPictureWhereUniqueInput } from './user-picture-where-unique.input';

@InputType()
export class UserPictureCreateNestedManyWithoutDirectus_filesInput {

    @Field(() => [UserPictureCreateWithoutDirectus_filesInput], {nullable:true})
    @Type(() => UserPictureCreateWithoutDirectus_filesInput)
    create?: Array<UserPictureCreateWithoutDirectus_filesInput>;

    @Field(() => [UserPictureCreateOrConnectWithoutDirectus_filesInput], {nullable:true})
    @Type(() => UserPictureCreateOrConnectWithoutDirectus_filesInput)
    connectOrCreate?: Array<UserPictureCreateOrConnectWithoutDirectus_filesInput>;

    @Field(() => UserPictureCreateManyDirectus_filesInputEnvelope, {nullable:true})
    @Type(() => UserPictureCreateManyDirectus_filesInputEnvelope)
    createMany?: UserPictureCreateManyDirectus_filesInputEnvelope;

    @Field(() => [UserPictureWhereUniqueInput], {nullable:true})
    @Type(() => UserPictureWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserPictureWhereUniqueInput, 'id'>>;
}
