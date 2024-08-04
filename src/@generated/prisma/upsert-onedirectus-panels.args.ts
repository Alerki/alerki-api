import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsWhereUniqueInput } from '../directus-panels/directus-panels-where-unique.input';
import { Type } from 'class-transformer';
import { directus_panelsCreateInput } from '../directus-panels/directus-panels-create.input';
import { directus_panelsUpdateInput } from '../directus-panels/directus-panels-update.input';

@ArgsType()
export class UpsertOnedirectusPanelsArgs {
  @Field(() => directus_panelsWhereUniqueInput, { nullable: false })
  @Type(() => directus_panelsWhereUniqueInput)
  where!: directus_panelsWhereUniqueInput;

  @Field(() => directus_panelsCreateInput, { nullable: false })
  @Type(() => directus_panelsCreateInput)
  create!: directus_panelsCreateInput;

  @Field(() => directus_panelsUpdateInput, { nullable: false })
  @Type(() => directus_panelsUpdateInput)
  update!: directus_panelsUpdateInput;
}
