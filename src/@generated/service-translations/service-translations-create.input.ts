import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateNestedManyWithoutService_translationsInput } from '../master-service/master-service-create-nested-many-without-service-translations.input';
import { languagesCreateNestedOneWithoutService_translationsInput } from '../languages/languages-create-nested-one-without-service-translations.input';
import { ServiceCreateNestedOneWithoutService_translationsInput } from '../service/service-create-nested-one-without-service-translations.input';

@InputType()
export class Service_translationsCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => MasterServiceCreateNestedManyWithoutService_translationsInput, {
    nullable: true,
  })
  MasterService?: MasterServiceCreateNestedManyWithoutService_translationsInput;

  @Field(() => languagesCreateNestedOneWithoutService_translationsInput, {
    nullable: true,
  })
  languages?: languagesCreateNestedOneWithoutService_translationsInput;

  @Field(() => ServiceCreateNestedOneWithoutService_translationsInput, {
    nullable: true,
  })
  Service?: ServiceCreateNestedOneWithoutService_translationsInput;
}
