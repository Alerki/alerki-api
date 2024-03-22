import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutService_translationsInput } from './languages-create-without-service-translations.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutService_translationsInput } from './languages-create-or-connect-without-service-translations.input';
import { Prisma } from '@prisma/client';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutService_translationsInput {

    @Field(() => languagesCreateWithoutService_translationsInput, {nullable:true})
    @Type(() => languagesCreateWithoutService_translationsInput)
    create?: languagesCreateWithoutService_translationsInput;

    @Field(() => languagesCreateOrConnectWithoutService_translationsInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutService_translationsInput)
    connectOrCreate?: languagesCreateOrConnectWithoutService_translationsInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: Prisma.AtLeast<languagesWhereUniqueInput, 'code'>;
}
