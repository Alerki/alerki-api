import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MasterWeeklyScheduleSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sort?: true;
}
