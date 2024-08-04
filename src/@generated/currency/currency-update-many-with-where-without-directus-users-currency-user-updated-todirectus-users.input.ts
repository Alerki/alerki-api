import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyScalarWhereInput } from './currency-scalar-where.input';
import { Type } from 'class-transformer';
import { CurrencyUpdateManyMutationInput } from './currency-update-many-mutation.input';

@InputType()
export class CurrencyUpdateManyWithWhereWithoutDirectus_users_Currency_user_updatedTodirectus_usersInput {
  @Field(() => CurrencyScalarWhereInput, { nullable: false })
  @Type(() => CurrencyScalarWhereInput)
  where!: CurrencyScalarWhereInput;

  @Field(() => CurrencyUpdateManyMutationInput, { nullable: false })
  @Type(() => CurrencyUpdateManyMutationInput)
  data!: CurrencyUpdateManyMutationInput;
}
