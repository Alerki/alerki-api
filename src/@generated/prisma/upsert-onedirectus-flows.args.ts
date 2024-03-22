import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsWhereUniqueInput } from '../directus-flows/directus-flows-where-unique.input';
import { Type } from 'class-transformer';
import { directus_flowsCreateInput } from '../directus-flows/directus-flows-create.input';
import { directus_flowsUpdateInput } from '../directus-flows/directus-flows-update.input';

@ArgsType()
export class UpsertOnedirectusFlowsArgs {

    @Field(() => directus_flowsWhereUniqueInput, {nullable:false})
    @Type(() => directus_flowsWhereUniqueInput)
    where!: directus_flowsWhereUniqueInput;

    @Field(() => directus_flowsCreateInput, {nullable:false})
    @Type(() => directus_flowsCreateInput)
    create!: directus_flowsCreateInput;

    @Field(() => directus_flowsUpdateInput, {nullable:false})
    @Type(() => directus_flowsUpdateInput)
    update!: directus_flowsUpdateInput;
}
