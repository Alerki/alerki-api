import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { SessionRelationFilter } from '../session/session-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class User_SessionWhereInput {

    @Field(() => [User_SessionWhereInput], {nullable:true})
    AND?: Array<User_SessionWhereInput>;

    @Field(() => [User_SessionWhereInput], {nullable:true})
    OR?: Array<User_SessionWhereInput>;

    @Field(() => [User_SessionWhereInput], {nullable:true})
    NOT?: Array<User_SessionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    User_id?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    Session_id?: UuidNullableFilter;

    @Field(() => SessionRelationFilter, {nullable:true})
    Session?: SessionRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;
}
