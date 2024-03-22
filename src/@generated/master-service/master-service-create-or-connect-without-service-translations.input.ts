import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateWithoutService_translationsInput } from './master-service-create-without-service-translations.input';

@InputType()
export class MasterServiceCreateOrConnectWithoutService_translationsInput {

    @Field(() => MasterServiceWhereUniqueInput, {nullable:false})
    @Type(() => MasterServiceWhereUniqueInput)
    where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

    @Field(() => MasterServiceCreateWithoutService_translationsInput, {nullable:false})
    @Type(() => MasterServiceCreateWithoutService_translationsInput)
    create!: MasterServiceCreateWithoutService_translationsInput;
}
