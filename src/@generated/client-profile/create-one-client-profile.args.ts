import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientProfileCreateInput } from './client-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneClientProfileArgs {

    @Field(() => ClientProfileCreateInput, {nullable:false})
    @Type(() => ClientProfileCreateInput)
    data!: ClientProfileCreateInput;
}
