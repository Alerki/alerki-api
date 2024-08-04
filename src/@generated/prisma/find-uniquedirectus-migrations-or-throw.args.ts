import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsWhereUniqueInput } from '../directus-migrations/directus-migrations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusMigrationsOrThrowArgs {
  @Field(() => directus_migrationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_migrationsWhereUniqueInput)
  where!: directus_migrationsWhereUniqueInput;
}
