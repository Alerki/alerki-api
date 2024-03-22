import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_presetsWhereUniqueInput } from './directus-presets-where-unique.input';
import { Type } from 'class-transformer';
import { directus_presetsCreateWithoutDirectus_rolesInput } from './directus-presets-create-without-directus-roles.input';

@InputType()
export class directus_presetsCreateOrConnectWithoutDirectus_rolesInput {

    @Field(() => directus_presetsWhereUniqueInput, {nullable:false})
    @Type(() => directus_presetsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>;

    @Field(() => directus_presetsCreateWithoutDirectus_rolesInput, {nullable:false})
    @Type(() => directus_presetsCreateWithoutDirectus_rolesInput)
    create!: directus_presetsCreateWithoutDirectus_rolesInput;
}
