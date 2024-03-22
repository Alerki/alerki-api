import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_flowsWhereUniqueInput } from './directus-flows-where-unique.input';
import { Type } from 'class-transformer';
import { directus_flowsCreateWithoutDirectus_operationsInput } from './directus-flows-create-without-directus-operations.input';

@InputType()
export class directus_flowsCreateOrConnectWithoutDirectus_operationsInput {

    @Field(() => directus_flowsWhereUniqueInput, {nullable:false})
    @Type(() => directus_flowsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>;

    @Field(() => directus_flowsCreateWithoutDirectus_operationsInput, {nullable:false})
    @Type(() => directus_flowsCreateWithoutDirectus_operationsInput)
    create!: directus_flowsCreateWithoutDirectus_operationsInput;
}
