import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionUpdateManyMutationInput } from './session-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SessionWhereInput } from './session-where.input';

@ArgsType()
export class UpdateManySessionArgs {

    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    data!: SessionUpdateManyMutationInput;

    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: SessionWhereInput;
}
