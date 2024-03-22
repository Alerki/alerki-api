import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientProfileWhereInput } from './client-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyClientProfileArgs {

    @Field(() => ClientProfileWhereInput, {nullable:true})
    @Type(() => ClientProfileWhereInput)
    where?: ClientProfileWhereInput;
}
