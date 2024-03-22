import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Appointment } from '../appointment/appointment.model';
import { User } from '../user/user.model';
import { ClientProfileCount } from './client-profile-count.output';

@ObjectType()
export class ClientProfile {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => [Appointment], {nullable:true})
    Appointment?: Array<Appointment>;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => ClientProfileCount, {nullable:false})
    _count?: ClientProfileCount;
}
