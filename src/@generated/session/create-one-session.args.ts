import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionCreateInput } from './session-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSessionArgs {

    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    data!: SessionCreateInput;
}
