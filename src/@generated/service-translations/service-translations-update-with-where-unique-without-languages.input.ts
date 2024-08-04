import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Type } from 'class-transformer';
import { Service_translationsUpdateWithoutLanguagesInput } from './service-translations-update-without-languages.input';

@InputType()
export class Service_translationsUpdateWithWhereUniqueWithoutLanguagesInput {
  @Field(() => Service_translationsWhereUniqueInput, { nullable: false })
  @Type(() => Service_translationsWhereUniqueInput)
  where!: Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>;

  @Field(() => Service_translationsUpdateWithoutLanguagesInput, {
    nullable: false,
  })
  @Type(() => Service_translationsUpdateWithoutLanguagesInput)
  data!: Service_translationsUpdateWithoutLanguagesInput;
}
