import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateManyCurrencyInput } from './appointment-create-many-currency.input';
import { Type } from 'class-transformer';

@InputType()
export class AppointmentCreateManyCurrencyInputEnvelope {

    @Field(() => [AppointmentCreateManyCurrencyInput], {nullable:false})
    @Type(() => AppointmentCreateManyCurrencyInput)
    data!: Array<AppointmentCreateManyCurrencyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
