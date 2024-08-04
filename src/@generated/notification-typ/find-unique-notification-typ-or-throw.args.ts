import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationTypWhereUniqueInput } from './notification-typ-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNotificationTypOrThrowArgs {
  @Field(() => NotificationTypWhereUniqueInput, { nullable: false })
  @Type(() => NotificationTypWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationTypWhereUniqueInput, 'id'>;
}
