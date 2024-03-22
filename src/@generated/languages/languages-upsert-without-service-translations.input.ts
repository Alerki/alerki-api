import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutService_translationsInput } from './languages-update-without-service-translations.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutService_translationsInput } from './languages-create-without-service-translations.input';

@InputType()
export class languagesUpsertWithoutService_translationsInput {

    @Field(() => languagesUpdateWithoutService_translationsInput, {nullable:false})
    @Type(() => languagesUpdateWithoutService_translationsInput)
    update!: languagesUpdateWithoutService_translationsInput;

    @Field(() => languagesCreateWithoutService_translationsInput, {nullable:false})
    @Type(() => languagesCreateWithoutService_translationsInput)
    create!: languagesCreateWithoutService_translationsInput;
}
