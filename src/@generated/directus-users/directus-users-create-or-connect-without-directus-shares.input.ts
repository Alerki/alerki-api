import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';
import { Type } from 'class-transformer';
import { directus_usersCreateWithoutDirectus_sharesInput } from './directus-users-create-without-directus-shares.input';

@InputType()
export class directus_usersCreateOrConnectWithoutDirectus_sharesInput {

    @Field(() => directus_usersWhereUniqueInput, {nullable:false})
    @Type(() => directus_usersWhereUniqueInput)
    where!: Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>;

    @Field(() => directus_usersCreateWithoutDirectus_sharesInput, {nullable:false})
    @Type(() => directus_usersCreateWithoutDirectus_sharesInput)
    create!: directus_usersCreateWithoutDirectus_sharesInput;
}
