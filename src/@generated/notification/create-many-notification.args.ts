import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationCreateManyInput } from './notification-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNotificationArgs {

    @Field(() => [NotificationCreateManyInput], {nullable:false})
    @Type(() => NotificationCreateManyInput)
    data!: Array<NotificationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
