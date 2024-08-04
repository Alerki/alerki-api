import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateManyLanguagesInput } from './service-translations-create-many-languages.input';
import { Type } from 'class-transformer';

@InputType()
export class Service_translationsCreateManyLanguagesInputEnvelope {
  @Field(() => [Service_translationsCreateManyLanguagesInput], {
    nullable: false,
  })
  @Type(() => Service_translationsCreateManyLanguagesInput)
  data!: Array<Service_translationsCreateManyLanguagesInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
