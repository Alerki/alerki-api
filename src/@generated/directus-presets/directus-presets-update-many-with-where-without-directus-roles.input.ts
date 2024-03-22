import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsScalarWhereInput } from './directus-presets-scalar-where.input';
import { Type } from 'class-transformer';
import { directus_presetsUpdateManyMutationInput } from './directus-presets-update-many-mutation.input';

@InputType()
export class directus_presetsUpdateManyWithWhereWithoutDirectus_rolesInput {

    @Field(() => directus_presetsScalarWhereInput, {nullable:false})
    @Type(() => directus_presetsScalarWhereInput)
    where!: directus_presetsScalarWhereInput;

    @Field(() => directus_presetsUpdateManyMutationInput, {nullable:false})
    @Type(() => directus_presetsUpdateManyMutationInput)
    data!: directus_presetsUpdateManyMutationInput;
}
