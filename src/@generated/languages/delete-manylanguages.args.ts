import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylanguagesArgs {

    @Field(() => languagesWhereInput, {nullable:true})
    @Type(() => languagesWhereInput)
    where?: languagesWhereInput;
}
