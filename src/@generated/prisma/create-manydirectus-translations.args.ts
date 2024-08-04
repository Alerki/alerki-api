import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_translationsCreateManyInput } from '../directus-translations/directus-translations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusTranslationsArgs {
  @Field(() => [directus_translationsCreateManyInput], { nullable: false })
  @Type(() => directus_translationsCreateManyInput)
  data!: Array<directus_translationsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
