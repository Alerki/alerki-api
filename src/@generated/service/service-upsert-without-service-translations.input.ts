import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceUpdateWithoutService_translationsInput } from './service-update-without-service-translations.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutService_translationsInput } from './service-create-without-service-translations.input';

@InputType()
export class ServiceUpsertWithoutService_translationsInput {
  @Field(() => ServiceUpdateWithoutService_translationsInput, {
    nullable: false,
  })
  @Type(() => ServiceUpdateWithoutService_translationsInput)
  update!: ServiceUpdateWithoutService_translationsInput;

  @Field(() => ServiceCreateWithoutService_translationsInput, {
    nullable: false,
  })
  @Type(() => ServiceCreateWithoutService_translationsInput)
  create!: ServiceCreateWithoutService_translationsInput;
}
