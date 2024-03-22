import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Directus_rolesCountAggregate } from './directus-roles-count-aggregate.output';
import { Directus_rolesMinAggregate } from './directus-roles-min-aggregate.output';
import { Directus_rolesMaxAggregate } from './directus-roles-max-aggregate.output';

@ObjectType()
export class Directus_rolesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    ip_access?: string;

    @Field(() => Boolean, {nullable:false})
    enforce_tfa!: boolean;

    @Field(() => Boolean, {nullable:false})
    admin_access!: boolean;

    @Field(() => Boolean, {nullable:false})
    app_access!: boolean;

    @Field(() => Directus_rolesCountAggregate, {nullable:true})
    _count?: Directus_rolesCountAggregate;

    @Field(() => Directus_rolesMinAggregate, {nullable:true})
    _min?: Directus_rolesMinAggregate;

    @Field(() => Directus_rolesMaxAggregate, {nullable:true})
    _max?: Directus_rolesMaxAggregate;
}
