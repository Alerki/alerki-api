import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesUpdateInput } from '../directus-shares/directus-shares-update.input';
import { Type } from 'class-transformer';
import { directus_sharesWhereUniqueInput } from '../directus-shares/directus-shares-where-unique.input';

@ArgsType()
export class UpdateOnedirectusSharesArgs {

    @Field(() => directus_sharesUpdateInput, {nullable:false})
    @Type(() => directus_sharesUpdateInput)
    data!: directus_sharesUpdateInput;

    @Field(() => directus_sharesWhereUniqueInput, {nullable:false})
    @Type(() => directus_sharesWhereUniqueInput)
    where!: directus_sharesWhereUniqueInput;
}
