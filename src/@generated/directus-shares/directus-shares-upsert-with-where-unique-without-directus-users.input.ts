import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sharesUpdateWithoutDirectus_usersInput } from './directus-shares-update-without-directus-users.input';
import { directus_sharesCreateWithoutDirectus_usersInput } from './directus-shares-create-without-directus-users.input';

@InputType()
export class directus_sharesUpsertWithWhereUniqueWithoutDirectus_usersInput {

    @Field(() => directus_sharesWhereUniqueInput, {nullable:false})
    @Type(() => directus_sharesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>;

    @Field(() => directus_sharesUpdateWithoutDirectus_usersInput, {nullable:false})
    @Type(() => directus_sharesUpdateWithoutDirectus_usersInput)
    update!: directus_sharesUpdateWithoutDirectus_usersInput;

    @Field(() => directus_sharesCreateWithoutDirectus_usersInput, {nullable:false})
    @Type(() => directus_sharesCreateWithoutDirectus_usersInput)
    create!: directus_sharesCreateWithoutDirectus_usersInput;
}
