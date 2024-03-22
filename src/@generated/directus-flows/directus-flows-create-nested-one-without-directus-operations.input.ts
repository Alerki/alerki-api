import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_flowsCreateWithoutDirectus_operationsInput } from './directus-flows-create-without-directus-operations.input';
import { Type } from 'class-transformer';
import { directus_flowsCreateOrConnectWithoutDirectus_operationsInput } from './directus-flows-create-or-connect-without-directus-operations.input';
import { Prisma } from '@prisma/client';
import { directus_flowsWhereUniqueInput } from './directus-flows-where-unique.input';

@InputType()
export class directus_flowsCreateNestedOneWithoutDirectus_operationsInput {

    @Field(() => directus_flowsCreateWithoutDirectus_operationsInput, {nullable:true})
    @Type(() => directus_flowsCreateWithoutDirectus_operationsInput)
    create?: directus_flowsCreateWithoutDirectus_operationsInput;

    @Field(() => directus_flowsCreateOrConnectWithoutDirectus_operationsInput, {nullable:true})
    @Type(() => directus_flowsCreateOrConnectWithoutDirectus_operationsInput)
    connectOrCreate?: directus_flowsCreateOrConnectWithoutDirectus_operationsInput;

    @Field(() => directus_flowsWhereUniqueInput, {nullable:true})
    @Type(() => directus_flowsWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>;
}
