import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionCreateNestedManyWithoutSessionInput } from '../user-session/user-session-create-nested-many-without-session.input';

@InputType()
export class SessionCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: true })
  deviceName?: string;

  @Field(() => String, { nullable: false })
  refreshToken!: string;

  @Field(() => User_SessionCreateNestedManyWithoutSessionInput, {
    nullable: true,
  })
  User_Session?: User_SessionCreateNestedManyWithoutSessionInput;
}
