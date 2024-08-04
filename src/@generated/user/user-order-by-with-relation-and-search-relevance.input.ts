import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClientProfileOrderByWithRelationAndSearchRelevanceInput } from '../client-profile/client-profile-order-by-with-relation-and-search-relevance.input';
import { MasterProfileOrderByWithRelationAndSearchRelevanceInput } from '../master-profile/master-profile-order-by-with-relation-and-search-relevance.input';
import { UserPictureOrderByWithRelationAndSearchRelevanceInput } from '../user-picture/user-picture-order-by-with-relation-and-search-relevance.input';
import { User_SessionOrderByRelationAggregateInput } from '../user-session/user-session-order-by-relation-aggregate.input';
import { User_UserRolesOrderByRelationAggregateInput } from '../user-user-roles/user-user-roles-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  birthDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  picture?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  masterProfile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  clientProfile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => ClientProfileOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  ClientProfile?: ClientProfileOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MasterProfileOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  MasterProfile?: MasterProfileOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => UserPictureOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  UserPicture?: UserPictureOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => User_SessionOrderByRelationAggregateInput, { nullable: true })
  User_Session?: User_SessionOrderByRelationAggregateInput;

  @Field(() => User_UserRolesOrderByRelationAggregateInput, { nullable: true })
  User_UserRoles?: User_UserRolesOrderByRelationAggregateInput;

  @Field(() => UserOrderByRelevanceInput, { nullable: true })
  _relevance?: UserOrderByRelevanceInput;
}
