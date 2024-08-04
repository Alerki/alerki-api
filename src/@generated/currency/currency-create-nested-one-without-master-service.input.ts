import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutMasterServiceInput } from './currency-create-without-master-service.input';
import { Type } from 'class-transformer';
import { CurrencyCreateOrConnectWithoutMasterServiceInput } from './currency-create-or-connect-without-master-service.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyCreateNestedOneWithoutMasterServiceInput {
  @Field(() => CurrencyCreateWithoutMasterServiceInput, { nullable: true })
  @Type(() => CurrencyCreateWithoutMasterServiceInput)
  create?: CurrencyCreateWithoutMasterServiceInput;

  @Field(() => CurrencyCreateOrConnectWithoutMasterServiceInput, {
    nullable: true,
  })
  @Type(() => CurrencyCreateOrConnectWithoutMasterServiceInput)
  connectOrCreate?: CurrencyCreateOrConnectWithoutMasterServiceInput;

  @Field(() => CurrencyWhereUniqueInput, { nullable: true })
  @Type(() => CurrencyWhereUniqueInput)
  connect?: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;
}
