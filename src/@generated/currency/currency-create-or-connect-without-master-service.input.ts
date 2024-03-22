import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Type } from 'class-transformer';
import { CurrencyCreateWithoutMasterServiceInput } from './currency-create-without-master-service.input';

@InputType()
export class CurrencyCreateOrConnectWithoutMasterServiceInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    @Type(() => CurrencyWhereUniqueInput)
    where!: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

    @Field(() => CurrencyCreateWithoutMasterServiceInput, {nullable:false})
    @Type(() => CurrencyCreateWithoutMasterServiceInput)
    create!: CurrencyCreateWithoutMasterServiceInput;
}
