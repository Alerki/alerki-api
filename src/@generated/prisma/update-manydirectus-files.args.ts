import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesUpdateManyMutationInput } from '../directus-files/directus-files-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_filesWhereInput } from '../directus-files/directus-files-where.input';

@ArgsType()
export class UpdateManydirectusFilesArgs {

    @Field(() => directus_filesUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_filesUpdateManyMutationInput)
    data!: directus_filesUpdateManyMutationInput;

    @Field(() => directus_filesWhereInput, {nullable:true})
    @Type(() => directus_filesWhereInput)
    where?: directus_filesWhereInput;
}
