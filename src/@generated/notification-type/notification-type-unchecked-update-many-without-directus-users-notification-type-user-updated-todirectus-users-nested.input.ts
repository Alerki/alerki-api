import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-create-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-create-or-connect-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { NotificationTypeUpsertWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-upsert-with-where-unique-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope } from './notification-type-create-many-directus-users-notification-type-user-updated-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { NotificationTypeUpdateWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-update-with-where-unique-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { NotificationTypeUpdateManyWithWhereWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-update-many-with-where-without-directus-users-notification-type-user-updated-todirectus-users.input';
import { NotificationTypeScalarWhereInput } from './notification-type-scalar-where.input';

@InputType()
export class NotificationTypeUncheckedUpdateManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersNestedInput {

    @Field(() => [NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput)
    create?: Array<NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

    @Field(() => [NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput)
    connectOrCreate?: Array<NotificationTypeCreateOrConnectWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

    @Field(() => [NotificationTypeUpsertWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => NotificationTypeUpsertWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput)
    upsert?: Array<NotificationTypeUpsertWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

    @Field(() => NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope, {nullable:true})
    @Type(() => NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope)
    createMany?: NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope;

    @Field(() => [NotificationTypeWhereUniqueInput], {nullable:true})
    @Type(() => NotificationTypeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [NotificationTypeWhereUniqueInput], {nullable:true})
    @Type(() => NotificationTypeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [NotificationTypeWhereUniqueInput], {nullable:true})
    @Type(() => NotificationTypeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [NotificationTypeWhereUniqueInput], {nullable:true})
    @Type(() => NotificationTypeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [NotificationTypeUpdateWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => NotificationTypeUpdateWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput)
    update?: Array<NotificationTypeUpdateWithWhereUniqueWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

    @Field(() => [NotificationTypeUpdateManyWithWhereWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => NotificationTypeUpdateManyWithWhereWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput)
    updateMany?: Array<NotificationTypeUpdateManyWithWhereWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

    @Field(() => [NotificationTypeScalarWhereInput], {nullable:true})
    @Type(() => NotificationTypeScalarWhereInput)
    deleteMany?: Array<NotificationTypeScalarWhereInput>;
}
