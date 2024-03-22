import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutService_translationsInput } from './languages-create-without-service-translations.input';

@InputType()
export class languagesCreateOrConnectWithoutService_translationsInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: Prisma.AtLeast<languagesWhereUniqueInput, 'code'>;

    @Field(() => languagesCreateWithoutService_translationsInput, {nullable:false})
    @Type(() => languagesCreateWithoutService_translationsInput)
    create!: languagesCreateWithoutService_translationsInput;
}
