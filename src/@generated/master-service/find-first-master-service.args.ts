import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceWhereInput } from './master-service-where.input';
import { Type } from 'class-transformer';
import { MasterServiceOrderByWithRelationAndSearchRelevanceInput } from './master-service-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MasterServiceScalarFieldEnum } from './master-service-scalar-field.enum';

@ArgsType()
export class FindFirstMasterServiceArgs {

    @Field(() => MasterServiceWhereInput, {nullable:true})
    @Type(() => MasterServiceWhereInput)
    where?: MasterServiceWhereInput;

    @Field(() => [MasterServiceOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MasterServiceOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MasterServiceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MasterServiceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MasterServiceScalarFieldEnum>;
}
