import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_permissionsCreateManyDirectus_rolesInput } from './directus-permissions-create-many-directus-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_permissionsCreateManyDirectus_rolesInputEnvelope {

    @Field(() => [directus_permissionsCreateManyDirectus_rolesInput], {nullable:false})
    @Type(() => directus_permissionsCreateManyDirectus_rolesInput)
    data!: Array<directus_permissionsCreateManyDirectus_rolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
