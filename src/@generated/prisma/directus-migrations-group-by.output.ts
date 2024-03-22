import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_migrationsCountAggregate } from './directus-migrations-count-aggregate.output';
import { Directus_migrationsMinAggregate } from './directus-migrations-min-aggregate.output';
import { Directus_migrationsMaxAggregate } from './directus-migrations-max-aggregate.output';

@ObjectType()
export class Directus_migrationsGroupBy {

    @Field(() => String, {nullable:false})
    version!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Directus_migrationsCountAggregate, {nullable:true})
    _count?: Directus_migrationsCountAggregate;

    @Field(() => Directus_migrationsMinAggregate, {nullable:true})
    _min?: Directus_migrationsMinAggregate;

    @Field(() => Directus_migrationsMaxAggregate, {nullable:true})
    _max?: Directus_migrationsMaxAggregate;
}
