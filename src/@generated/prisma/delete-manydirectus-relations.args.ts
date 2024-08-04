import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_relationsWhereInput } from '../directus-relations/directus-relations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusRelationsArgs {
  @Field(() => directus_relationsWhereInput, { nullable: true })
  @Type(() => directus_relationsWhereInput)
  where?: directus_relationsWhereInput;
}
