import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateWithoutUserPictureInput } from './directus-files-create-without-user-picture.input';
import { Type } from 'class-transformer';
import { directus_filesCreateOrConnectWithoutUserPictureInput } from './directus-files-create-or-connect-without-user-picture.input';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';

@InputType()
export class directus_filesCreateNestedOneWithoutUserPictureInput {

    @Field(() => directus_filesCreateWithoutUserPictureInput, {nullable:true})
    @Type(() => directus_filesCreateWithoutUserPictureInput)
    create?: directus_filesCreateWithoutUserPictureInput;

    @Field(() => directus_filesCreateOrConnectWithoutUserPictureInput, {nullable:true})
    @Type(() => directus_filesCreateOrConnectWithoutUserPictureInput)
    connectOrCreate?: directus_filesCreateOrConnectWithoutUserPictureInput;

    @Field(() => directus_filesWhereUniqueInput, {nullable:true})
    @Type(() => directus_filesWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;
}
