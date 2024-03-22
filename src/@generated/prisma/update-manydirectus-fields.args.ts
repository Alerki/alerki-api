import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsUpdateManyMutationInput } from '../directus-fields/directus-fields-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_fieldsWhereInput } from '../directus-fields/directus-fields-where.input';

@ArgsType()
export class UpdateManydirectusFieldsArgs {

    @Field(() => directus_fieldsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_fieldsUpdateManyMutationInput)
    data!: directus_fieldsUpdateManyMutationInput;

    @Field(() => directus_fieldsWhereInput, {nullable:true})
    @Type(() => directus_fieldsWhereInput)
    where?: directus_fieldsWhereInput;
}
