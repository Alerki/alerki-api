import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UserPictureScalarWhereInput {

    @Field(() => [UserPictureScalarWhereInput], {nullable:true})
    AND?: Array<UserPictureScalarWhereInput>;

    @Field(() => [UserPictureScalarWhereInput], {nullable:true})
    OR?: Array<UserPictureScalarWhereInput>;

    @Field(() => [UserPictureScalarWhereInput], {nullable:true})
    NOT?: Array<UserPictureScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    picture?: UuidFilter;
}
