import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sharesUpdateWithoutDirectus_rolesInput } from './directus-shares-update-without-directus-roles.input';
import { directus_sharesCreateWithoutDirectus_rolesInput } from './directus-shares-create-without-directus-roles.input';

@InputType()
export class directus_sharesUpsertWithWhereUniqueWithoutDirectus_rolesInput {

    @Field(() => directus_sharesWhereUniqueInput, {nullable:false})
    @Type(() => directus_sharesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>;

    @Field(() => directus_sharesUpdateWithoutDirectus_rolesInput, {nullable:false})
    @Type(() => directus_sharesUpdateWithoutDirectus_rolesInput)
    update!: directus_sharesUpdateWithoutDirectus_rolesInput;

    @Field(() => directus_sharesCreateWithoutDirectus_rolesInput, {nullable:false})
    @Type(() => directus_sharesCreateWithoutDirectus_rolesInput)
    create!: directus_sharesCreateWithoutDirectus_rolesInput;
}
