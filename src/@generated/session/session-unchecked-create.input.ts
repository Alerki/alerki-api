import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionUncheckedCreateNestedManyWithoutSessionInput } from '../user-session/user-session-unchecked-create-nested-many-without-session.input';

@InputType()
export class SessionUncheckedCreateInput {
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

  @Field(() => User_SessionUncheckedCreateNestedManyWithoutSessionInput, {
    nullable: true,
  })
  User_Session?: User_SessionUncheckedCreateNestedManyWithoutSessionInput;
}
