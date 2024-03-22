import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsUpdateInput } from '../directus-panels/directus-panels-update.input';
import { Type } from 'class-transformer';
import { directus_panelsWhereUniqueInput } from '../directus-panels/directus-panels-where-unique.input';

@ArgsType()
export class UpdateOnedirectusPanelsArgs {

    @Field(() => directus_panelsUpdateInput, {nullable:false})
    @Type(() => directus_panelsUpdateInput)
    data!: directus_panelsUpdateInput;

    @Field(() => directus_panelsWhereUniqueInput, {nullable:false})
    @Type(() => directus_panelsWhereUniqueInput)
    where!: directus_panelsWhereUniqueInput;
}
