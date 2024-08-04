import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsCreateManyInput } from '../service-translations/service-translations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyServiceTranslationsArgs {
  @Field(() => [Service_translationsCreateManyInput], { nullable: false })
  @Type(() => Service_translationsCreateManyInput)
  data!: Array<Service_translationsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
