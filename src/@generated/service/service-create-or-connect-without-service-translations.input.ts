import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutService_translationsInput } from './service-create-without-service-translations.input';

@InputType()
export class ServiceCreateOrConnectWithoutService_translationsInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;

    @Field(() => ServiceCreateWithoutService_translationsInput, {nullable:false})
    @Type(() => ServiceCreateWithoutService_translationsInput)
    create!: ServiceCreateWithoutService_translationsInput;
}
