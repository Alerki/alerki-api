import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsWhereUniqueInput } from '../directus-relations/directus-relations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusRelationsArgs {

    @Field(() => directus_relationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_relationsWhereUniqueInput)
    where!: directus_relationsWhereUniqueInput;
}
