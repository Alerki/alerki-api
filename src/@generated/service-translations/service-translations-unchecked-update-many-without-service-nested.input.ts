import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateWithoutServiceInput } from './service-translations-create-without-service.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateOrConnectWithoutServiceInput } from './service-translations-create-or-connect-without-service.input';
import { Service_translationsUpsertWithWhereUniqueWithoutServiceInput } from './service-translations-upsert-with-where-unique-without-service.input';
import { Service_translationsCreateManyServiceInputEnvelope } from './service-translations-create-many-service-input-envelope.input';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Service_translationsUpdateWithWhereUniqueWithoutServiceInput } from './service-translations-update-with-where-unique-without-service.input';
import { Service_translationsUpdateManyWithWhereWithoutServiceInput } from './service-translations-update-many-with-where-without-service.input';
import { Service_translationsScalarWhereInput } from './service-translations-scalar-where.input';

@InputType()
export class Service_translationsUncheckedUpdateManyWithoutServiceNestedInput {

    @Field(() => [Service_translationsCreateWithoutServiceInput], {nullable:true})
    @Type(() => Service_translationsCreateWithoutServiceInput)
    create?: Array<Service_translationsCreateWithoutServiceInput>;

    @Field(() => [Service_translationsCreateOrConnectWithoutServiceInput], {nullable:true})
    @Type(() => Service_translationsCreateOrConnectWithoutServiceInput)
    connectOrCreate?: Array<Service_translationsCreateOrConnectWithoutServiceInput>;

    @Field(() => [Service_translationsUpsertWithWhereUniqueWithoutServiceInput], {nullable:true})
    @Type(() => Service_translationsUpsertWithWhereUniqueWithoutServiceInput)
    upsert?: Array<Service_translationsUpsertWithWhereUniqueWithoutServiceInput>;

    @Field(() => Service_translationsCreateManyServiceInputEnvelope, {nullable:true})
    @Type(() => Service_translationsCreateManyServiceInputEnvelope)
    createMany?: Service_translationsCreateManyServiceInputEnvelope;

    @Field(() => [Service_translationsWhereUniqueInput], {nullable:true})
    @Type(() => Service_translationsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [Service_translationsWhereUniqueInput], {nullable:true})
    @Type(() => Service_translationsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [Service_translationsWhereUniqueInput], {nullable:true})
    @Type(() => Service_translationsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [Service_translationsWhereUniqueInput], {nullable:true})
    @Type(() => Service_translationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [Service_translationsUpdateWithWhereUniqueWithoutServiceInput], {nullable:true})
    @Type(() => Service_translationsUpdateWithWhereUniqueWithoutServiceInput)
    update?: Array<Service_translationsUpdateWithWhereUniqueWithoutServiceInput>;

    @Field(() => [Service_translationsUpdateManyWithWhereWithoutServiceInput], {nullable:true})
    @Type(() => Service_translationsUpdateManyWithWhereWithoutServiceInput)
    updateMany?: Array<Service_translationsUpdateManyWithWhereWithoutServiceInput>;

    @Field(() => [Service_translationsScalarWhereInput], {nullable:true})
    @Type(() => Service_translationsScalarWhereInput)
    deleteMany?: Array<Service_translationsScalarWhereInput>;
}
