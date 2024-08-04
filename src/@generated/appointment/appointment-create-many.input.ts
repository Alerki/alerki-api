import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AppointmentCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  masterService!: string;

  @Field(() => String, { nullable: false })
  clientProfile!: string;

  @Field(() => String, { nullable: false })
  masterProfile!: string;

  @Field(() => Date, { nullable: false })
  duration!: Date | string;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => String, { nullable: false })
  currency!: string;

  @Field(() => Date, { nullable: false })
  startAt!: Date | string;

  @Field(() => Date, { nullable: false })
  endAt!: Date | string;

  @Field(() => Boolean, { nullable: true })
  confirmed?: boolean;

  @Field(() => Boolean, { nullable: true })
  cancelled?: boolean;
}
