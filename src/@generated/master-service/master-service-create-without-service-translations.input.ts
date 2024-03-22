import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CurrencyCreateNestedOneWithoutMasterServiceInput } from '../currency/currency-create-nested-one-without-master-service.input';
import { MasterProfileCreateNestedOneWithoutMasterServiceInput } from '../master-profile/master-profile-create-nested-one-without-master-service.input';

@InputType()
export class MasterServiceCreateWithoutService_translationsInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => Date, {nullable:false})
    duration!: Date | string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => CurrencyCreateNestedOneWithoutMasterServiceInput, {nullable:false})
    Currency!: CurrencyCreateNestedOneWithoutMasterServiceInput;

    @Field(() => MasterProfileCreateNestedOneWithoutMasterServiceInput, {nullable:false})
    MasterProfile!: MasterProfileCreateNestedOneWithoutMasterServiceInput;
}
