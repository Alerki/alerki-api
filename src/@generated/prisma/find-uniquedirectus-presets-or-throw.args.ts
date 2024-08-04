import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsWhereUniqueInput } from '../directus-presets/directus-presets-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusPresetsOrThrowArgs {
  @Field(() => directus_presetsWhereUniqueInput, { nullable: false })
  @Type(() => directus_presetsWhereUniqueInput)
  where!: directus_presetsWhereUniqueInput;
}
