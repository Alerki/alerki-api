import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceUpdateInput } from './service-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@ArgsType()
export class UpdateOneServiceArgs {

    @Field(() => ServiceUpdateInput, {nullable:false})
    @Type(() => ServiceUpdateInput)
    data!: ServiceUpdateInput;

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;
}
