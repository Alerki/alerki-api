import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsUpdateInput } from '../directus-flows/directus-flows-update.input';
import { Type } from 'class-transformer';
import { directus_flowsWhereUniqueInput } from '../directus-flows/directus-flows-where-unique.input';

@ArgsType()
export class UpdateOnedirectusFlowsArgs {

    @Field(() => directus_flowsUpdateInput, {nullable:false})
    @Type(() => directus_flowsUpdateInput)
    data!: directus_flowsUpdateInput;

    @Field(() => directus_flowsWhereUniqueInput, {nullable:false})
    @Type(() => directus_flowsWhereUniqueInput)
    where!: directus_flowsWhereUniqueInput;
}
