import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class MasterProfileScalarWhereInput {
  @Field(() => [MasterProfileScalarWhereInput], { nullable: true })
  AND?: Array<MasterProfileScalarWhereInput>;

  @Field(() => [MasterProfileScalarWhereInput], { nullable: true })
  OR?: Array<MasterProfileScalarWhereInput>;

  @Field(() => [MasterProfileScalarWhereInput], { nullable: true })
  NOT?: Array<MasterProfileScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => UuidFilter, { nullable: true })
  masterWeeklySchedule?: UuidFilter;
}
