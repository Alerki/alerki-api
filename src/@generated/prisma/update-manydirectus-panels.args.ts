import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsUpdateManyMutationInput } from '../directus-panels/directus-panels-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_panelsWhereInput } from '../directus-panels/directus-panels-where.input';

@ArgsType()
export class UpdateManydirectusPanelsArgs {

    @Field(() => directus_panelsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_panelsUpdateManyMutationInput)
    data!: directus_panelsUpdateManyMutationInput;

    @Field(() => directus_panelsWhereInput, {nullable:true})
    @Type(() => directus_panelsWhereInput)
    where?: directus_panelsWhereInput;
}
