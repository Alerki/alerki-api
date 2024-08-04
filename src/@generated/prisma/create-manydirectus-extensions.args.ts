import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsCreateManyInput } from '../directus-extensions/directus-extensions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusExtensionsArgs {
  @Field(() => [directus_extensionsCreateManyInput], { nullable: false })
  @Type(() => directus_extensionsCreateManyInput)
  data!: Array<directus_extensionsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
