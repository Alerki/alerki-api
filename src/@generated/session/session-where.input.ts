import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { User_SessionListRelationFilter } from '../user-session/user-session-list-relation-filter.input';

@InputType()
export class SessionWhereInput {
  @Field(() => [SessionWhereInput], { nullable: true })
  AND?: Array<SessionWhereInput>;

  @Field(() => [SessionWhereInput], { nullable: true })
  OR?: Array<SessionWhereInput>;

  @Field(() => [SessionWhereInput], { nullable: true })
  NOT?: Array<SessionWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_created?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_updated?: DateTimeNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  deviceName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  refreshToken?: StringFilter;

  @Field(() => User_SessionListRelationFilter, { nullable: true })
  User_Session?: User_SessionListRelationFilter;
}
