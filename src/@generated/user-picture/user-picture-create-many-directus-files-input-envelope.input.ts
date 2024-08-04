import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPictureCreateManyDirectus_filesInput } from './user-picture-create-many-directus-files.input';
import { Type } from 'class-transformer';

@InputType()
export class UserPictureCreateManyDirectus_filesInputEnvelope {
  @Field(() => [UserPictureCreateManyDirectus_filesInput], { nullable: false })
  @Type(() => UserPictureCreateManyDirectus_filesInput)
  data!: Array<UserPictureCreateManyDirectus_filesInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
