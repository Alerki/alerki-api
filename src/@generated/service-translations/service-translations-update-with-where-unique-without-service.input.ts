import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Type } from 'class-transformer';
import { Service_translationsUpdateWithoutServiceInput } from './service-translations-update-without-service.input';

@InputType()
export class Service_translationsUpdateWithWhereUniqueWithoutServiceInput {

    @Field(() => Service_translationsWhereUniqueInput, {nullable:false})
    @Type(() => Service_translationsWhereUniqueInput)
    where!: Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Service_translationsUpdateWithoutServiceInput, {nullable:false})
    @Type(() => Service_translationsUpdateWithoutServiceInput)
    data!: Service_translationsUpdateWithoutServiceInput;
}
