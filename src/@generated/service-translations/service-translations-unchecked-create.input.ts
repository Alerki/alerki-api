import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MasterServiceUncheckedCreateNestedManyWithoutService_translationsInput } from '../master-service/master-service-unchecked-create-nested-many-without-service-translations.input';

@InputType()
export class Service_translationsUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  Service_id?: string;

  @Field(() => String, { nullable: true })
  languages_id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(
    () =>
      MasterServiceUncheckedCreateNestedManyWithoutService_translationsInput,
    { nullable: true },
  )
  MasterService?: MasterServiceUncheckedCreateNestedManyWithoutService_translationsInput;
}
