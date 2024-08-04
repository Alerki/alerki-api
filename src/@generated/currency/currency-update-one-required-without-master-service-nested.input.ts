import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutMasterServiceInput } from './currency-create-without-master-service.input';
import { Type } from 'class-transformer';
import { CurrencyCreateOrConnectWithoutMasterServiceInput } from './currency-create-or-connect-without-master-service.input';
import { CurrencyUpsertWithoutMasterServiceInput } from './currency-upsert-without-master-service.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithoutMasterServiceInput } from './currency-update-without-master-service.input';

@InputType()
export class CurrencyUpdateOneRequiredWithoutMasterServiceNestedInput {
  @Field(() => CurrencyCreateWithoutMasterServiceInput, { nullable: true })
  @Type(() => CurrencyCreateWithoutMasterServiceInput)
  create?: CurrencyCreateWithoutMasterServiceInput;

  @Field(() => CurrencyCreateOrConnectWithoutMasterServiceInput, {
    nullable: true,
  })
  @Type(() => CurrencyCreateOrConnectWithoutMasterServiceInput)
  connectOrCreate?: CurrencyCreateOrConnectWithoutMasterServiceInput;

  @Field(() => CurrencyUpsertWithoutMasterServiceInput, { nullable: true })
  @Type(() => CurrencyUpsertWithoutMasterServiceInput)
  upsert?: CurrencyUpsertWithoutMasterServiceInput;

  @Field(() => CurrencyWhereUniqueInput, { nullable: true })
  @Type(() => CurrencyWhereUniqueInput)
  connect?: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

  @Field(() => CurrencyUpdateWithoutMasterServiceInput, { nullable: true })
  @Type(() => CurrencyUpdateWithoutMasterServiceInput)
  update?: CurrencyUpdateWithoutMasterServiceInput;
}
