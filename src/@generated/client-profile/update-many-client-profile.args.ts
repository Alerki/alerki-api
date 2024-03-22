import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientProfileUpdateManyMutationInput } from './client-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ClientProfileWhereInput } from './client-profile-where.input';

@ArgsType()
export class UpdateManyClientProfileArgs {

    @Field(() => ClientProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ClientProfileUpdateManyMutationInput)
    data!: ClientProfileUpdateManyMutationInput;

    @Field(() => ClientProfileWhereInput, {nullable:true})
    @Type(() => ClientProfileWhereInput)
    where?: ClientProfileWhereInput;
}
