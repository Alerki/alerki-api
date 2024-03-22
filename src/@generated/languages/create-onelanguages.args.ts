import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesCreateInput } from './languages-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelanguagesArgs {

    @Field(() => languagesCreateInput, {nullable:false})
    @Type(() => languagesCreateInput)
    data!: languagesCreateInput;
}
