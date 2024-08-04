import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User_UserRolesCountAggregate } from './user-user-roles-count-aggregate.output';
import { User_UserRolesAvgAggregate } from './user-user-roles-avg-aggregate.output';
import { User_UserRolesSumAggregate } from './user-user-roles-sum-aggregate.output';
import { User_UserRolesMinAggregate } from './user-user-roles-min-aggregate.output';
import { User_UserRolesMaxAggregate } from './user-user-roles-max-aggregate.output';

@ObjectType()
export class AggregateUser_UserRoles {
  @Field(() => User_UserRolesCountAggregate, { nullable: true })
  _count?: User_UserRolesCountAggregate;

  @Field(() => User_UserRolesAvgAggregate, { nullable: true })
  _avg?: User_UserRolesAvgAggregate;

  @Field(() => User_UserRolesSumAggregate, { nullable: true })
  _sum?: User_UserRolesSumAggregate;

  @Field(() => User_UserRolesMinAggregate, { nullable: true })
  _min?: User_UserRolesMinAggregate;

  @Field(() => User_UserRolesMaxAggregate, { nullable: true })
  _max?: User_UserRolesMaxAggregate;
}
