import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsCreateInput } from '../directus-relations/directus-relations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusRelationsArgs {

    @Field(() => directus_relationsCreateInput, {nullable:false})
    @Type(() => directus_relationsCreateInput)
    data!: directus_relationsCreateInput;
}
