import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_SessionCreateManySessionInput } from './user-session-create-many-session.input';
import { Type } from 'class-transformer';

@InputType()
export class User_SessionCreateManySessionInputEnvelope {

    @Field(() => [User_SessionCreateManySessionInput], {nullable:false})
    @Type(() => User_SessionCreateManySessionInput)
    data!: Array<User_SessionCreateManySessionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
