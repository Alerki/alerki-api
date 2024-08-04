import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutService_translationsInput } from './service-create-without-service-translations.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutService_translationsInput } from './service-create-or-connect-without-service-translations.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedOneWithoutService_translationsInput {
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

  @Field(() => ServiceWhereUniqueInput, { nullable: true })
  @Type(() => ServiceWhereUniqueInput)
  connect?: Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>;
}
