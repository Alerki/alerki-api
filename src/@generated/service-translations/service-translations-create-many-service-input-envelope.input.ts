import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateManyServiceInput } from './service-translations-create-many-service.input';
import { Type } from 'class-transformer';

@InputType()
export class Service_translationsCreateManyServiceInputEnvelope {
  @Field(() => [Service_translationsCreateManyServiceInput], {
    nullable: false,
  })
  @Type(() => Service_translationsCreateManyServiceInput)
  data!: Array<Service_translationsCreateManyServiceInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
