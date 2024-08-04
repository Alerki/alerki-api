import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateManyCurrencyInput } from './master-service-create-many-currency.input';
import { Type } from 'class-transformer';

@InputType()
export class MasterServiceCreateManyCurrencyInputEnvelope {
  @Field(() => [MasterServiceCreateManyCurrencyInput], { nullable: false })
  @Type(() => MasterServiceCreateManyCurrencyInput)
  data!: Array<MasterServiceCreateManyCurrencyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
