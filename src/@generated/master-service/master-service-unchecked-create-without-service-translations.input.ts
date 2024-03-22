import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MasterServiceUncheckedCreateWithoutService_translationsInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => String, {nullable:false})
    masterProfile!: string;

    @Field(() => Date, {nullable:false})
    duration!: Date | string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    currency!: string;
}
