import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_filesWhereUniqueInput } from './directus-files-where-unique.input';
import { Type } from 'class-transformer';
import { directus_filesCreateWithoutUserPictureInput } from './directus-files-create-without-user-picture.input';

@InputType()
export class directus_filesCreateOrConnectWithoutUserPictureInput {

    @Field(() => directus_filesWhereUniqueInput, {nullable:false})
    @Type(() => directus_filesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_filesWhereUniqueInput, 'id'>;

    @Field(() => directus_filesCreateWithoutUserPictureInput, {nullable:false})
    @Type(() => directus_filesCreateWithoutUserPictureInput)
    create!: directus_filesCreateWithoutUserPictureInput;
}
