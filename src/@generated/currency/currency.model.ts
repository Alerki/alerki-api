import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Appointment } from '../appointment/appointment.model';
import { directus_users } from '../directus-users/directus-users.model';
import { MasterService } from '../master-service/master-service.model';
import { CurrencyCount } from './currency-count.output';

@ObjectType()
export class Currency {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false, defaultValue: 'draft' })
  status!: string;

  @Field(() => Int, { nullable: true })
  sort!: number | null;

  @Field(() => String, { nullable: true })
  user_created!: string | null;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => String, { nullable: true })
  user_updated!: string | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  character!: string;

  @Field(() => [Appointment], { nullable: true })
  Appointment?: Array<Appointment>;

  @Field(() => directus_users, { nullable: true })
  directus_users_Currency_user_createdTodirectus_users?: directus_users | null;

  @Field(() => directus_users, { nullable: true })
  directus_users_Currency_user_updatedTodirectus_users?: directus_users | null;

  @Field(() => [MasterService], { nullable: true })
  MasterService?: Array<MasterService>;

  @Field(() => CurrencyCount, { nullable: false })
  _count?: CurrencyCount;
}
