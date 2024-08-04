import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateManyClientProfileInput } from './appointment-create-many-client-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class AppointmentCreateManyClientProfileInputEnvelope {
  @Field(() => [AppointmentCreateManyClientProfileInput], { nullable: false })
  @Type(() => AppointmentCreateManyClientProfileInput)
  data!: Array<AppointmentCreateManyClientProfileInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
