import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_collectionsWhereUniqueInput } from '../directus-collections/directus-collections-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusCollectionsOrThrowArgs {
  @Field(() => directus_collectionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_collectionsWhereUniqueInput)
  where!: directus_collectionsWhereUniqueInput;
}
