import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsWhereUniqueInput } from '../directus-operations/directus-operations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateInput } from '../directus-operations/directus-operations-create.input';
import { directus_operationsUpdateInput } from '../directus-operations/directus-operations-update.input';

@ArgsType()
export class UpsertOnedirectusOperationsArgs {

    @Field(() => directus_operationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_operationsWhereUniqueInput)
    where!: directus_operationsWhereUniqueInput;

    @Field(() => directus_operationsCreateInput, {nullable:false})
    @Type(() => directus_operationsCreateInput)
    create!: directus_operationsCreateInput;

    @Field(() => directus_operationsUpdateInput, {nullable:false})
    @Type(() => directus_operationsUpdateInput)
    update!: directus_operationsUpdateInput;
}
