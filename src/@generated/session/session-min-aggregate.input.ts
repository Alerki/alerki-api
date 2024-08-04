import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  date_created?: true;

  @Field(() => Boolean, { nullable: true })
  date_updated?: true;

  @Field(() => Boolean, { nullable: true })
  deviceName?: true;

  @Field(() => Boolean, { nullable: true })
  refreshToken?: true;
}
