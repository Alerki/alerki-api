import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ServiceScalarWhereInput {
  @Field(() => [ServiceScalarWhereInput], { nullable: true })
  AND?: Array<ServiceScalarWhereInput>;

  @Field(() => [ServiceScalarWhereInput], { nullable: true })
  OR?: Array<ServiceScalarWhereInput>;

  @Field(() => [ServiceScalarWhereInput], { nullable: true })
  NOT?: Array<ServiceScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  status?: StringFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  sort?: IntNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_created?: UuidNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  user_updated?: UuidNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;
}
