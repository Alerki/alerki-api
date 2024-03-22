import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_foldersWhereUniqueInput } from '../directus-folders/directus-folders-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusFoldersOrThrowArgs {

    @Field(() => directus_foldersWhereUniqueInput, {nullable:false})
    @Type(() => directus_foldersWhereUniqueInput)
    where!: directus_foldersWhereUniqueInput;
}
