import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CurrencyCreateNestedOneWithoutMasterServiceInput } from '../currency/currency-create-nested-one-without-master-service.input';
import { Service_translationsCreateNestedOneWithoutMasterServiceInput } from '../service-translations/service-translations-create-nested-one-without-master-service.input';

@InputType()
export class MasterServiceCreateWithoutMasterProfileInput {

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

    @Field(() => Service_translationsCreateNestedOneWithoutMasterServiceInput, {nullable:false})
    Service_translations!: Service_translationsCreateNestedOneWithoutMasterServiceInput;
}
