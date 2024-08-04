import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsCreateInput } from '../directus-migrations/directus-migrations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusMigrationsArgs {
  @Field(() => directus_migrationsCreateInput, { nullable: false })
  @Type(() => directus_migrationsCreateInput)
  data!: directus_migrationsCreateInput;
}
