import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Service_translationsUncheckedCreateNestedManyWithoutServiceInput } from '../service-translations/service-translations-unchecked-create-nested-many-without-service.input';

@InputType()
export class ServiceUncheckedCreateWithoutDirectus_users_Service_user_createdTodirectus_usersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: true })
  sort?: number;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(
    () => Service_translationsUncheckedCreateNestedManyWithoutServiceInput,
    { nullable: true },
  )
  Service_translations?: Service_translationsUncheckedCreateNestedManyWithoutServiceInput;
}
