import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsUpdateManyMutationInput } from '../directus-migrations/directus-migrations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { directus_migrationsWhereInput } from '../directus-migrations/directus-migrations-where.input';

@ArgsType()
export class UpdateManydirectusMigrationsArgs {
  @Field(() => directus_migrationsUpdateManyMutationInput, { nullable: false })
  @Type(() => directus_migrationsUpdateManyMutationInput)
  data!: directus_migrationsUpdateManyMutationInput;

  @Field(() => directus_migrationsWhereInput, { nullable: true })
  @Type(() => directus_migrationsWhereInput)
  where?: directus_migrationsWhereInput;
}
