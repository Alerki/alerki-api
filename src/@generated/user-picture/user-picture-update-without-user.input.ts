import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_filesUpdateOneRequiredWithoutUserPictureNestedInput } from '../directus-files/directus-files-update-one-required-without-user-picture-nested.input';

@InputType()
export class UserPictureUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => directus_filesUpdateOneRequiredWithoutUserPictureNestedInput, {
    nullable: true,
  })
  directus_files?: directus_filesUpdateOneRequiredWithoutUserPictureNestedInput;
}
