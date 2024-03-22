import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_usersInput } from './directus-shares-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_usersInput } from './directus-shares-create-or-connect-without-directus-users.input';
import { directus_sharesCreateManyDirectus_usersInputEnvelope } from './directus-shares-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';

@InputType()
export class directus_sharesUncheckedCreateNestedManyWithoutDirectus_usersInput {

    @Field(() => [directus_sharesCreateWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sharesCreateWithoutDirectus_usersInput)
    create?: Array<directus_sharesCreateWithoutDirectus_usersInput>;

    @Field(() => [directus_sharesCreateOrConnectWithoutDirectus_usersInput], {nullable:true})
    @Type(() => directus_sharesCreateOrConnectWithoutDirectus_usersInput)
    connectOrCreate?: Array<directus_sharesCreateOrConnectWithoutDirectus_usersInput>;

    @Field(() => directus_sharesCreateManyDirectus_usersInputEnvelope, {nullable:true})
    @Type(() => directus_sharesCreateManyDirectus_usersInputEnvelope)
    createMany?: directus_sharesCreateManyDirectus_usersInputEnvelope;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;
}
