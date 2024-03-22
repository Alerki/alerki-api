import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesWhereInput } from '../directus-files/directus-files-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusFilesArgs {

    @Field(() => directus_filesWhereInput, {nullable:true})
    @Type(() => directus_filesWhereInput)
    where?: directus_filesWhereInput;
}
