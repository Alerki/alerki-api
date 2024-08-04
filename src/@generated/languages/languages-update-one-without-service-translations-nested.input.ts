import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutService_translationsInput } from './languages-create-without-service-translations.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutService_translationsInput } from './languages-create-or-connect-without-service-translations.input';
import { languagesUpsertWithoutService_translationsInput } from './languages-upsert-without-service-translations.input';
import { Prisma } from '@prisma/client';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutService_translationsInput } from './languages-update-without-service-translations.input';

@InputType()
export class languagesUpdateOneWithoutService_translationsNestedInput {
  @Field(() => languagesCreateWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => languagesCreateWithoutService_translationsInput)
  create?: languagesCreateWithoutService_translationsInput;

  @Field(() => languagesCreateOrConnectWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => languagesCreateOrConnectWithoutService_translationsInput)
  connectOrCreate?: languagesCreateOrConnectWithoutService_translationsInput;

  @Field(() => languagesUpsertWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => languagesUpsertWithoutService_translationsInput)
  upsert?: languagesUpsertWithoutService_translationsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => languagesWhereUniqueInput, { nullable: true })
  @Type(() => languagesWhereUniqueInput)
  connect?: Prisma.AtLeast<languagesWhereUniqueInput, 'code'>;

  @Field(() => languagesUpdateWithoutService_translationsInput, {
    nullable: true,
  })
  @Type(() => languagesUpdateWithoutService_translationsInput)
  update?: languagesUpdateWithoutService_translationsInput;
}
