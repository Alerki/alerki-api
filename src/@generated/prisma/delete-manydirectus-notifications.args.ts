import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsWhereInput } from '../directus-notifications/directus-notifications-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusNotificationsArgs {

    @Field(() => directus_notificationsWhereInput, {nullable:true})
    @Type(() => directus_notificationsWhereInput)
    where?: directus_notificationsWhereInput;
}
