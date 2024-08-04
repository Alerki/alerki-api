import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsUpdateInput } from '../service-translations/service-translations-update.input';
import { Type } from 'class-transformer';
import { Service_translationsWhereUniqueInput } from '../service-translations/service-translations-where-unique.input';

@ArgsType()
export class UpdateOneServiceTranslationsArgs {
  @Field(() => Service_translationsUpdateInput, { nullable: false })
  @Type(() => Service_translationsUpdateInput)
  data!: Service_translationsUpdateInput;

  @Field(() => Service_translationsWhereUniqueInput, { nullable: false })
  @Type(() => Service_translationsWhereUniqueInput)
  where!: Service_translationsWhereUniqueInput;
}
