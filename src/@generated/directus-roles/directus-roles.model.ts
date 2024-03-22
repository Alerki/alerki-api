import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { directus_permissions } from '../directus-permissions/directus-permissions.model';
import { directus_presets } from '../directus-presets/directus-presets.model';
import { directus_shares } from '../directus-shares/directus-shares.model';
import { directus_users } from '../directus-users/directus-users.model';
import { Directus_rolesCount } from '../prisma/directus-roles-count.output';

@ObjectType()
export class directus_roles {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false,defaultValue:'supervised_user_circle'})
    icon!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    ip_access!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    enforce_tfa!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    admin_access!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    app_access!: boolean;

    @Field(() => [directus_permissions], {nullable:true})
    directus_permissions?: Array<directus_permissions>;

    @Field(() => [directus_presets], {nullable:true})
    directus_presets?: Array<directus_presets>;

    @Field(() => [directus_shares], {nullable:true})
    directus_shares?: Array<directus_shares>;

    @Field(() => [directus_users], {nullable:true})
    directus_users?: Array<directus_users>;

    @Field(() => Directus_rolesCount, {nullable:false})
    _count?: Directus_rolesCount;
}
