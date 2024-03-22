import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateWithoutOther_directus_foldersInput } from './directus-folders-create-without-other-directus-folders.input';

@InputType()
export class directus_foldersCreateOrConnectWithoutOther_directus_foldersInput {

    @Field(() => directus_foldersWhereUniqueInput, {nullable:false})
    @Type(() => directus_foldersWhereUniqueInput)
    where!: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

    @Field(() => directus_foldersCreateWithoutOther_directus_foldersInput, {nullable:false})
    @Type(() => directus_foldersCreateWithoutOther_directus_foldersInput)
    create!: directus_foldersCreateWithoutOther_directus_foldersInput;
}
