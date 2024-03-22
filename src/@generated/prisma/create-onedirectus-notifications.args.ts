import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsCreateInput } from '../directus-notifications/directus-notifications-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusNotificationsArgs {

    @Field(() => directus_notificationsCreateInput, {nullable:false})
    @Type(() => directus_notificationsCreateInput)
    data!: directus_notificationsCreateInput;
}
