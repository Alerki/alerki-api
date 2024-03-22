import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateWithoutServiceInput } from './service-translations-create-without-service.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateOrConnectWithoutServiceInput } from './service-translations-create-or-connect-without-service.input';
import { Service_translationsCreateManyServiceInputEnvelope } from './service-translations-create-many-service-input-envelope.input';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';

@InputType()
export class Service_translationsUncheckedCreateNestedManyWithoutServiceInput {

    @Field(() => [Service_translationsCreateWithoutServiceInput], {nullable:true})
    @Type(() => Service_translationsCreateWithoutServiceInput)
    create?: Array<Service_translationsCreateWithoutServiceInput>;

    @Field(() => [Service_translationsCreateOrConnectWithoutServiceInput], {nullable:true})
    @Type(() => Service_translationsCreateOrConnectWithoutServiceInput)
    connectOrCreate?: Array<Service_translationsCreateOrConnectWithoutServiceInput>;

    @Field(() => Service_translationsCreateManyServiceInputEnvelope, {nullable:true})
    @Type(() => Service_translationsCreateManyServiceInputEnvelope)
    createMany?: Service_translationsCreateManyServiceInputEnvelope;

    @Field(() => [Service_translationsWhereUniqueInput], {nullable:true})
    @Type(() => Service_translationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>>;
}
