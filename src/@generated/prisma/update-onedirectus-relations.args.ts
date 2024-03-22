import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsUpdateInput } from '../directus-relations/directus-relations-update.input';
import { Type } from 'class-transformer';
import { directus_relationsWhereUniqueInput } from '../directus-relations/directus-relations-where-unique.input';

@ArgsType()
export class UpdateOnedirectusRelationsArgs {

    @Field(() => directus_relationsUpdateInput, {nullable:false})
    @Type(() => directus_relationsUpdateInput)
    data!: directus_relationsUpdateInput;

    @Field(() => directus_relationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_relationsWhereUniqueInput)
    where!: directus_relationsWhereUniqueInput;
}
