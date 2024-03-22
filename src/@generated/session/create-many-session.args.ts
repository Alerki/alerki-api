import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionCreateManyInput } from './session-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySessionArgs {

    @Field(() => [SessionCreateManyInput], {nullable:false})
    @Type(() => SessionCreateManyInput)
    data!: Array<SessionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
