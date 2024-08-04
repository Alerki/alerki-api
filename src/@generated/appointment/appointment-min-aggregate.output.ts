import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AppointmentMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: true })
  masterService?: string;

  @Field(() => String, { nullable: true })
  clientProfile?: string;

  @Field(() => String, { nullable: true })
  masterProfile?: string;

  @Field(() => Date, { nullable: true })
  duration?: Date | string;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => String, { nullable: true })
  currency?: string;

  @Field(() => Date, { nullable: true })
  startAt?: Date | string;

  @Field(() => Date, { nullable: true })
  endAt?: Date | string;

  @Field(() => Boolean, { nullable: true })
  confirmed?: boolean;

  @Field(() => Boolean, { nullable: true })
  cancelled?: boolean;
}
