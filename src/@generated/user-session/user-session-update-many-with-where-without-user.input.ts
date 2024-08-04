import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionScalarWhereInput } from './user-session-scalar-where.input';
import { Type } from 'class-transformer';
import { User_SessionUncheckedUpdateManyWithoutUser_SessionInput } from './user-session-unchecked-update-many-without-user-session.input';

@InputType()
export class User_SessionUpdateManyWithWhereWithoutUserInput {
  @Field(() => User_SessionScalarWhereInput, { nullable: false })
  @Type(() => User_SessionScalarWhereInput)
  where!: User_SessionScalarWhereInput;

  @Field(() => User_SessionUncheckedUpdateManyWithoutUser_SessionInput, {
    nullable: false,
  })
  @Type(() => User_SessionUncheckedUpdateManyWithoutUser_SessionInput)
  data!: User_SessionUncheckedUpdateManyWithoutUser_SessionInput;
}
