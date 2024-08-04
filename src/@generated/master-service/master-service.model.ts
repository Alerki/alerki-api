import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Currency } from '../currency/currency.model';
import { MasterProfile } from '../master-profile/master-profile.model';
import { Service_translations } from '../service-translations/service-translations.model';

@ObjectType()
export class MasterService {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false, defaultValue: 'draft' })
  status!: string;

  @Field(() => Date, { nullable: true })
  date_created!: Date | null;

  @Field(() => Date, { nullable: true })
  date_updated!: Date | null;

  @Field(() => String, { nullable: false })
  masterProfile!: string;

  @Field(() => Date, { nullable: false })
  duration!: Date;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => String, { nullable: false })
  currency!: string;

  @Field(() => Int, { nullable: false })
  service!: number;

  @Field(() => Currency, { nullable: false })
  Currency?: Currency;

  @Field(() => MasterProfile, { nullable: false })
  MasterProfile?: MasterProfile;

  @Field(() => Service_translations, { nullable: false })
  Service_translations?: Service_translations;
}
