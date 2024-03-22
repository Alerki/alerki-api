import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_usersCreateWithoutDirectus_rolesInput } from './directus-users-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_usersCreateOrConnectWithoutDirectus_rolesInput } from './directus-users-create-or-connect-without-directus-roles.input';
import { directus_usersCreateManyDirectus_rolesInputEnvelope } from './directus-users-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_usersWhereUniqueInput } from './directus-users-where-unique.input';

@InputType()
export class directus_usersUncheckedCreateNestedManyWithoutDirectus_rolesInput {

    @Field(() => [directus_usersCreateWithoutDirectus_rolesInput], {nullable:true})
    @Type(() => directus_usersCreateWithoutDirectus_rolesInput)
    create?: Array<directus_usersCreateWithoutDirectus_rolesInput>;

    @Field(() => [directus_usersCreateOrConnectWithoutDirectus_rolesInput], {nullable:true})
    @Type(() => directus_usersCreateOrConnectWithoutDirectus_rolesInput)
    connectOrCreate?: Array<directus_usersCreateOrConnectWithoutDirectus_rolesInput>;

    @Field(() => directus_usersCreateManyDirectus_rolesInputEnvelope, {nullable:true})
    @Type(() => directus_usersCreateManyDirectus_rolesInputEnvelope)
    createMany?: directus_usersCreateManyDirectus_rolesInputEnvelope;

    @Field(() => [directus_usersWhereUniqueInput], {nullable:true})
    @Type(() => directus_usersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_usersWhereUniqueInput, 'id' | 'email' | 'token' | 'external_identifier'>>;
}
