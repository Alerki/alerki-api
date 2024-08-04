import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MasterProfileCreateNestedOneWithoutMasterServiceInput } from '../master-profile/master-profile-create-nested-one-without-master-service.input';
import { Service_translationsCreateNestedOneWithoutMasterServiceInput } from '../service-translations/service-translations-create-nested-one-without-master-service.input';

@InputType()
export class MasterServiceCreateWithoutCurrencyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => Date, { nullable: false })
  duration!: Date | string;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => MasterProfileCreateNestedOneWithoutMasterServiceInput, {
    nullable: false,
  })
  MasterProfile!: MasterProfileCreateNestedOneWithoutMasterServiceInput;

  @Field(() => Service_translationsCreateNestedOneWithoutMasterServiceInput, {
    nullable: false,
  })
  Service_translations!: Service_translationsCreateNestedOneWithoutMasterServiceInput;
}
