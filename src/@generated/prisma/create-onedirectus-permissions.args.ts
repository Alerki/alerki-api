import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_permissionsCreateInput } from '../directus-permissions/directus-permissions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusPermissionsArgs {

    @Field(() => directus_permissionsCreateInput, {nullable:false})
    @Type(() => directus_permissionsCreateInput)
    data!: directus_permissionsCreateInput;
}
