import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsWhereInput } from '../directus-fields/directus-fields-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusFieldsArgs {

    @Field(() => directus_fieldsWhereInput, {nullable:true})
    @Type(() => directus_fieldsWhereInput)
    where?: directus_fieldsWhereInput;
}
