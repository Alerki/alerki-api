import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateWithoutServiceInput } from './service-translations-create-without-service.input';

@InputType()
export class Service_translationsCreateOrConnectWithoutServiceInput {

    @Field(() => Service_translationsWhereUniqueInput, {nullable:false})
    @Type(() => Service_translationsWhereUniqueInput)
    where!: Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Service_translationsCreateWithoutServiceInput, {nullable:false})
    @Type(() => Service_translationsCreateWithoutServiceInput)
    create!: Service_translationsCreateWithoutServiceInput;
}
