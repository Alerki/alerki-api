import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypWhereInput } from './notification-typ-where.input';
import { Type } from 'class-transformer';
import { NotificationTypOrderByWithRelationAndSearchRelevanceInput } from './notification-typ-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { NotificationTypWhereUniqueInput } from './notification-typ-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationTypScalarFieldEnum } from './notification-typ-scalar-field.enum';

@ArgsType()
export class FindManyNotificationTypArgs {
  @Field(() => NotificationTypWhereInput, { nullable: true })
  @Type(() => NotificationTypWhereInput)
  where?: NotificationTypWhereInput;

  @Field(() => [NotificationTypOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<NotificationTypOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => NotificationTypWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<NotificationTypWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [NotificationTypScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof NotificationTypScalarFieldEnum>;
}
