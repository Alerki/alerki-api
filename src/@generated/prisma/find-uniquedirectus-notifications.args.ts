import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsWhereUniqueInput } from '../directus-notifications/directus-notifications-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusNotificationsArgs {

    @Field(() => directus_notificationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_notificationsWhereUniqueInput)
    where!: directus_notificationsWhereUniqueInput;
}
