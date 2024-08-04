import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientProfile } from '../client-profile/client-profile.model';
import { Currency } from '../currency/currency.model';
import { MasterProfile } from '../master-profile/master-profile.model';

@ObjectType()
export class Appointment {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false })
  masterService!: string;

  @Field(() => String, { nullable: false })
  clientProfile!: string;

  @Field(() => String, { nullable: false })
  masterProfile!: string;

  @Field(() => Date, { nullable: false })
  duration!: Date;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => String, { nullable: false })
  currency!: string;

  @Field(() => Date, { nullable: false })
  startAt!: Date;

  @Field(() => Date, { nullable: false })
  endAt!: Date;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  confirmed!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  cancelled!: boolean;

  @Field(() => ClientProfile, { nullable: false })
  ClientProfile?: ClientProfile;

  @Field(() => Currency, { nullable: false })
  Currency?: Currency;

  @Field(() => MasterProfile, { nullable: false })
  MasterProfile_Appointment_masterProfileToMasterProfile?: MasterProfile;

  @Field(() => MasterProfile, { nullable: false })
  MasterProfile_Appointment_masterServiceToMasterProfile?: MasterProfile;
}
