import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsWhereUniqueInput } from '../directus-fields/directus-fields-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusFieldsOrThrowArgs {

    @Field(() => directus_fieldsWhereUniqueInput, {nullable:false})
    @Type(() => directus_fieldsWhereUniqueInput)
    where!: directus_fieldsWhereUniqueInput;
}
