import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CurrencyCount {
  @Field(() => Int, { nullable: false })
  Appointment?: number;

  @Field(() => Int, { nullable: false })
  MasterService?: number;
}
