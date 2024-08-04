import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyCreateManyInput } from './currency-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCurrencyArgs {
  @Field(() => [CurrencyCreateManyInput], { nullable: false })
  @Type(() => CurrencyCreateManyInput)
  data!: Array<CurrencyCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
