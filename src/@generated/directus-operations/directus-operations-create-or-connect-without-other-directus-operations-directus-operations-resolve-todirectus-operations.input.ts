import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';

@InputType()
export class directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput {

    @Field(() => directus_operationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_operationsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_operationsWhereUniqueInput, 'id' | 'resolve' | 'reject'>;

    @Field(() => directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput, {nullable:false})
    @Type(() => directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput)
    create!: directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;
}
