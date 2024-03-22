import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_rolesCreateManyInput } from '../directus-roles/directus-roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusRolesArgs {

    @Field(() => [directus_rolesCreateManyInput], {nullable:false})
    @Type(() => directus_rolesCreateManyInput)
    data!: Array<directus_rolesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
