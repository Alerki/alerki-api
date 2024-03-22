import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyUpdateManyMutationInput } from './currency-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CurrencyWhereInput } from './currency-where.input';

@ArgsType()
export class UpdateManyCurrencyArgs {

    @Field(() => CurrencyUpdateManyMutationInput, {nullable:false})
    @Type(() => CurrencyUpdateManyMutationInput)
    data!: CurrencyUpdateManyMutationInput;

    @Field(() => CurrencyWhereInput, {nullable:true})
    @Type(() => CurrencyWhereInput)
    where?: CurrencyWhereInput;
}
