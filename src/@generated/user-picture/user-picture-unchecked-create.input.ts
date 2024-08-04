import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutUserPictureInput } from '../user/user-unchecked-create-nested-many-without-user-picture.input';

@InputType()
export class UserPictureUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  picture!: string;

  @Field(() => UserUncheckedCreateNestedManyWithoutUserPictureInput, {
    nullable: true,
  })
  User?: UserUncheckedCreateNestedManyWithoutUserPictureInput;
}
