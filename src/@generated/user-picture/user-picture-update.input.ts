import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateManyWithoutUserPictureNestedInput } from '../user/user-update-many-without-user-picture-nested.input';
import { directus_filesUpdateOneRequiredWithoutUserPictureNestedInput } from '../directus-files/directus-files-update-one-required-without-user-picture-nested.input';

@InputType()
export class UserPictureUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateManyWithoutUserPictureNestedInput, { nullable: true })
  User?: UserUpdateManyWithoutUserPictureNestedInput;

  @Field(() => directus_filesUpdateOneRequiredWithoutUserPictureNestedInput, {
    nullable: true,
  })
  directus_files?: directus_filesUpdateOneRequiredWithoutUserPictureNestedInput;
}
