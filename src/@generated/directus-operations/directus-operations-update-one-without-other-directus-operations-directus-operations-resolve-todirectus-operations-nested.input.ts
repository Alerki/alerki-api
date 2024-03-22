import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-create-or-connect-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { directus_operationsUpsertWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-upsert-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';
import { directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput } from './directus-operations-update-without-other-directus-operations-directus-operations-resolve-todirectus-operations.input';

@InputType()
export class directus_operationsUpdateOneWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsNestedInput {

    @Field(() => directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput, {nullable:true})
    @Type(() => directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput)
    create?: directus_operationsCreateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;

    @Field(() => directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput, {nullable:true})
    @Type(() => directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput)
    connectOrCreate?: directus_operationsCreateOrConnectWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;

    @Field(() => directus_operationsUpsertWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput, {nullable:true})
    @Type(() => directus_operationsUpsertWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput)
    upsert?: directus_operationsUpsertWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_operationsWhereUniqueInput, {nullable:true})
    @Type(() => directus_operationsWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_operationsWhereUniqueInput, 'id' | 'resolve' | 'reject'>;

    @Field(() => directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput, {nullable:true})
    @Type(() => directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput)
    update?: directus_operationsUpdateWithoutOther_directus_operations_directus_operations_resolveTodirectus_operationsInput;
}
