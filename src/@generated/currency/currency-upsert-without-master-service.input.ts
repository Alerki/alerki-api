import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyUpdateWithoutMasterServiceInput } from './currency-update-without-master-service.input';
import { Type } from 'class-transformer';
import { CurrencyCreateWithoutMasterServiceInput } from './currency-create-without-master-service.input';

@InputType()
export class CurrencyUpsertWithoutMasterServiceInput {
  @Field(() => CurrencyUpdateWithoutMasterServiceInput, { nullable: false })
  @Type(() => CurrencyUpdateWithoutMasterServiceInput)
  update!: CurrencyUpdateWithoutMasterServiceInput;

  @Field(() => CurrencyCreateWithoutMasterServiceInput, { nullable: false })
  @Type(() => CurrencyCreateWithoutMasterServiceInput)
  create!: CurrencyCreateWithoutMasterServiceInput;
}
