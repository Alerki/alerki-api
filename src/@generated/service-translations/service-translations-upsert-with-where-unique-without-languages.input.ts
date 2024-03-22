import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Type } from 'class-transformer';
import { Service_translationsUpdateWithoutLanguagesInput } from './service-translations-update-without-languages.input';
import { Service_translationsCreateWithoutLanguagesInput } from './service-translations-create-without-languages.input';

@InputType()
export class Service_translationsUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => Service_translationsWhereUniqueInput, {nullable:false})
    @Type(() => Service_translationsWhereUniqueInput)
    where!: Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Service_translationsUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => Service_translationsUpdateWithoutLanguagesInput)
    update!: Service_translationsUpdateWithoutLanguagesInput;

    @Field(() => Service_translationsCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => Service_translationsCreateWithoutLanguagesInput)
    create!: Service_translationsCreateWithoutLanguagesInput;
}
