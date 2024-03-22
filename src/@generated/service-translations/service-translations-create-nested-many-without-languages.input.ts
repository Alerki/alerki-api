import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateWithoutLanguagesInput } from './service-translations-create-without-languages.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateOrConnectWithoutLanguagesInput } from './service-translations-create-or-connect-without-languages.input';
import { Service_translationsCreateManyLanguagesInputEnvelope } from './service-translations-create-many-languages-input-envelope.input';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';

@InputType()
export class Service_translationsCreateNestedManyWithoutLanguagesInput {

    @Field(() => [Service_translationsCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => Service_translationsCreateWithoutLanguagesInput)
    create?: Array<Service_translationsCreateWithoutLanguagesInput>;

    @Field(() => [Service_translationsCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => Service_translationsCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<Service_translationsCreateOrConnectWithoutLanguagesInput>;

    @Field(() => Service_translationsCreateManyLanguagesInputEnvelope, {nullable:true})
    @Type(() => Service_translationsCreateManyLanguagesInputEnvelope)
    createMany?: Service_translationsCreateManyLanguagesInputEnvelope;

    @Field(() => [Service_translationsWhereUniqueInput], {nullable:true})
    @Type(() => Service_translationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>>;
}
