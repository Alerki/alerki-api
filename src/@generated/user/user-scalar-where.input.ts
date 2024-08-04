import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: Array<UserScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  phoneNumber?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  username?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  firstName?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  lastName?: StringNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  birthDate?: DateTimeNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  picture?: UuidNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  masterProfile?: UuidNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  clientProfile?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;
}
