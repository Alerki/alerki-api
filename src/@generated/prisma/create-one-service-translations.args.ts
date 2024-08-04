import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsCreateInput } from '../service-translations/service-translations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneServiceTranslationsArgs {
  @Field(() => Service_translationsCreateInput, { nullable: false })
  @Type(() => Service_translationsCreateInput)
  data!: Service_translationsCreateInput;
}
