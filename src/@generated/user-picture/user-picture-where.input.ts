import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { Directus_filesRelationFilter } from '../prisma/directus-files-relation-filter.input';

@InputType()
export class UserPictureWhereInput {
  @Field(() => [UserPictureWhereInput], { nullable: true })
  AND?: Array<UserPictureWhereInput>;

  @Field(() => [UserPictureWhereInput], { nullable: true })
  OR?: Array<UserPictureWhereInput>;

  @Field(() => [UserPictureWhereInput], { nullable: true })
  NOT?: Array<UserPictureWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  picture?: UuidFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  User?: UserListRelationFilter;

  @Field(() => Directus_filesRelationFilter, { nullable: true })
  directus_files?: Directus_filesRelationFilter;
}
