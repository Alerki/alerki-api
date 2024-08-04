import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsCreateManyInput } from '../directus-migrations/directus-migrations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusMigrationsArgs {
  @Field(() => [directus_migrationsCreateManyInput], { nullable: false })
  @Type(() => directus_migrationsCreateManyInput)
  data!: Array<directus_migrationsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
