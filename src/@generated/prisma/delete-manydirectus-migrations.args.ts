import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_migrationsWhereInput } from '../directus-migrations/directus-migrations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusMigrationsArgs {

    @Field(() => directus_migrationsWhereInput, {nullable:true})
    @Type(() => directus_migrationsWhereInput)
    where?: directus_migrationsWhereInput;
}
