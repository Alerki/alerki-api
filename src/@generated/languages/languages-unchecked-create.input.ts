import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsUncheckedCreateNestedManyWithoutLanguagesInput } from '../service-translations/service-translations-unchecked-create-nested-many-without-languages.input';

@InputType()
export class languagesUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  direction?: string;

  @Field(
    () => Service_translationsUncheckedCreateNestedManyWithoutLanguagesInput,
    { nullable: true },
  )
  Service_translations?: Service_translationsUncheckedCreateNestedManyWithoutLanguagesInput;
}
