import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsCreateManyInput } from '../directus-panels/directus-panels-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusPanelsArgs {
  @Field(() => [directus_panelsCreateManyInput], { nullable: false })
  @Type(() => directus_panelsCreateManyInput)
  data!: Array<directus_panelsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
