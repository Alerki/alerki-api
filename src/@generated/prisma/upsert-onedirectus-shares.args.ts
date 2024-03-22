import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesWhereUniqueInput } from '../directus-shares/directus-shares-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateInput } from '../directus-shares/directus-shares-create.input';
import { directus_sharesUpdateInput } from '../directus-shares/directus-shares-update.input';

@ArgsType()
export class UpsertOnedirectusSharesArgs {

    @Field(() => directus_sharesWhereUniqueInput, {nullable:false})
    @Type(() => directus_sharesWhereUniqueInput)
    where!: directus_sharesWhereUniqueInput;

    @Field(() => directus_sharesCreateInput, {nullable:false})
    @Type(() => directus_sharesCreateInput)
    create!: directus_sharesCreateInput;

    @Field(() => directus_sharesUpdateInput, {nullable:false})
    @Type(() => directus_sharesUpdateInput)
    update!: directus_sharesUpdateInput;
}
