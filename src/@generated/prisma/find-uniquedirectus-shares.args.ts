import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesWhereUniqueInput } from '../directus-shares/directus-shares-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusSharesArgs {

    @Field(() => directus_sharesWhereUniqueInput, {nullable:false})
    @Type(() => directus_sharesWhereUniqueInput)
    where!: directus_sharesWhereUniqueInput;
}
