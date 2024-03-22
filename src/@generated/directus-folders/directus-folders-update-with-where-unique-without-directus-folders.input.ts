import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';
import { Type } from 'class-transformer';
import { directus_foldersUpdateWithoutDirectus_foldersInput } from './directus-folders-update-without-directus-folders.input';

@InputType()
export class directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput {

    @Field(() => directus_foldersWhereUniqueInput, {nullable:false})
    @Type(() => directus_foldersWhereUniqueInput)
    where!: Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>;

    @Field(() => directus_foldersUpdateWithoutDirectus_foldersInput, {nullable:false})
    @Type(() => directus_foldersUpdateWithoutDirectus_foldersInput)
    data!: directus_foldersUpdateWithoutDirectus_foldersInput;
}
