import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsCreateManyInput } from '../directus-relations/directus-relations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusRelationsArgs {
  @Field(() => [directus_relationsCreateManyInput], { nullable: false })
  @Type(() => directus_relationsCreateManyInput)
  data!: Array<directus_relationsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
