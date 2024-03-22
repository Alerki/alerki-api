import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_notificationsCreateManyInput } from '../directus-notifications/directus-notifications-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusNotificationsArgs {

    @Field(() => [directus_notificationsCreateManyInput], {nullable:false})
    @Type(() => directus_notificationsCreateManyInput)
    data!: Array<directus_notificationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
