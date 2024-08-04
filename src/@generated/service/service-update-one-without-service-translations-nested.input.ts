import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutService_translationsInput } from './service-create-without-service-translations.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutService_translationsInput } from './service-create-or-connect-without-service-translations.input';
import { ServiceUpsertWithoutService_translationsInput } from './service-upsert-without-service-translations.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithoutService_translationsInput } from './service-update-without-service-translations.input';

@InputType()
export class ServiceUpdateOneWithoutService_translationsNestedInput {
  @Field(() => ServiceCreateWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => ServiceCreateWithoutService_translationsInput)
  create?: ServiceCreateWithoutService_translationsInput;

  @Field(() => ServiceCreateOrConnectWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => ServiceCreateOrConnectWithoutService_translationsInput)
  connectOrCreate?: ServiceCreateOrConnectWithoutService_translationsInput;

  @Field(() => ServiceUpsertWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => ServiceUpsertWithoutService_translationsInput)
  upsert?: ServiceUpsertWithoutService_translationsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => ServiceWhereUniqueInput, { nullable: true })
  @Type(() => ServiceWhereUniqueInput)
  connect?: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;

  @Field(() => ServiceUpdateWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => ServiceUpdateWithoutService_translationsInput)
  update?: ServiceUpdateWithoutService_translationsInput;
}
