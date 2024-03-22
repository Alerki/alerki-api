import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsUpdateInput } from '../directus-migrations/directus-migrations-update.input';
import { Type } from 'class-transformer';
import { directus_migrationsWhereUniqueInput } from '../directus-migrations/directus-migrations-where-unique.input';

@ArgsType()
export class UpdateOnedirectusMigrationsArgs {

    @Field(() => directus_migrationsUpdateInput, {nullable:false})
    @Type(() => directus_migrationsUpdateInput)
    data!: directus_migrationsUpdateInput;

    @Field(() => directus_migrationsWhereUniqueInput, {nullable:false})
    @Type(() => directus_migrationsWhereUniqueInput)
    where!: directus_migrationsWhereUniqueInput;
}
