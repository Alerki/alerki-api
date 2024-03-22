import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersWhereInput } from '../directus-folders/directus-folders-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusFoldersArgs {

    @Field(() => directus_foldersWhereInput, {nullable:true})
    @Type(() => directus_foldersWhereInput)
    where?: directus_foldersWhereInput;
}
