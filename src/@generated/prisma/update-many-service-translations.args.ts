import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Service_translationsUpdateManyMutationInput } from '../service-translations/service-translations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { Service_translationsWhereInput } from '../service-translations/service-translations-where.input';

@ArgsType()
export class UpdateManyServiceTranslationsArgs {
  @Field(() => Service_translationsUpdateManyMutationInput, { nullable: false })
  @Type(() => Service_translationsUpdateManyMutationInput)
  data!: Service_translationsUpdateManyMutationInput;

  @Field(() => Service_translationsWhereInput, { nullable: true })
  @Type(() => Service_translationsWhereInput)
  where?: Service_translationsWhereInput;
}
