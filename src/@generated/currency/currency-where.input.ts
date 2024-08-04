import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AppointmentListRelationFilter } from '../appointment/appointment-list-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';
import { MasterServiceListRelationFilter } from '../master-service/master-service-list-relation-filter.input';

@InputType()
export class CurrencyWhereInput {
  @Field(() => [CurrencyWhereInput], { nullable: true })
  AND?: Array<CurrencyWhereInput>;

  @Field(() => [CurrencyWhereInput], { nullable: true })
  OR?: Array<CurrencyWhereInput>;

  @Field(() => [CurrencyWhereInput], { nullable: true })
  NOT?: Array<CurrencyWhereInput>;

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

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  character?: StringFilter;

  @Field(() => AppointmentListRelationFilter, { nullable: true })
  Appointment?: AppointmentListRelationFilter;

  @Field(() => Directus_usersRelationFilter, { nullable: true })
  directus_users_Currency_user_createdTodirectus_users?: Directus_usersRelationFilter;

  @Field(() => Directus_usersRelationFilter, { nullable: true })
  directus_users_Currency_user_updatedTodirectus_users?: Directus_usersRelationFilter;

  @Field(() => MasterServiceListRelationFilter, { nullable: true })
  MasterService?: MasterServiceListRelationFilter;
}
