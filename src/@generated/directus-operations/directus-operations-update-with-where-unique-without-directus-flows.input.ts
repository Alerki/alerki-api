import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_operationsUpdateWithoutDirectus_flowsInput } from './directus-operations-update-without-directus-flows.input';

@InputType()
export class directus_operationsUpdateWithWhereUniqueWithoutDirectus_flowsInput {

    @Field(() => directus_operationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_operationsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_operationsWhereUniqueInput, 'id' | 'resolve' | 'reject'>;

    @Field(() => directus_operationsUpdateWithoutDirectus_flowsInput, {nullable:false})
    @Type(() => directus_operationsUpdateWithoutDirectus_flowsInput)
    data!: directus_operationsUpdateWithoutDirectus_flowsInput;
}
