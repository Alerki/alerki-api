import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesUpdateManyMutationInput } from '../directus-shares/directus-shares-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_sharesWhereInput } from '../directus-shares/directus-shares-where.input';

@ArgsType()
export class UpdateManydirectusSharesArgs {

    @Field(() => directus_sharesUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_sharesUpdateManyMutationInput)
    data!: directus_sharesUpdateManyMutationInput;

    @Field(() => directus_sharesWhereInput, {nullable:true})
    @Type(() => directus_sharesWhereInput)
    where?: directus_sharesWhereInput;
}
