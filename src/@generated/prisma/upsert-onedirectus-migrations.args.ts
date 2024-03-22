import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsWhereUniqueInput } from '../directus-migrations/directus-migrations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_migrationsCreateInput } from '../directus-migrations/directus-migrations-create.input';
import { directus_migrationsUpdateInput } from '../directus-migrations/directus-migrations-update.input';

@ArgsType()
export class UpsertOnedirectusMigrationsArgs {

    @Field(() => directus_migrationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_migrationsWhereUniqueInput)
    where!: directus_migrationsWhereUniqueInput;

    @Field(() => directus_migrationsCreateInput, {nullable:false})
    @Type(() => directus_migrationsCreateInput)
    create!: directus_migrationsCreateInput;

    @Field(() => directus_migrationsUpdateInput, {nullable:false})
    @Type(() => directus_migrationsUpdateInput)
    update!: directus_migrationsUpdateInput;
}
