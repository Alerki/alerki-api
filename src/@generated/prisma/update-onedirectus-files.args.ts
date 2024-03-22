import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesUpdateInput } from '../directus-files/directus-files-update.input';
import { Type } from 'class-transformer';
import { directus_filesWhereUniqueInput } from '../directus-files/directus-files-where-unique.input';

@ArgsType()
export class UpdateOnedirectusFilesArgs {

    @Field(() => directus_filesUpdateInput, {nullable:false})
    @Type(() => directus_filesUpdateInput)
    data!: directus_filesUpdateInput;

    @Field(() => directus_filesWhereUniqueInput, {nullable:false})
    @Type(() => directus_filesWhereUniqueInput)
    where!: directus_filesWhereUniqueInput;
}
