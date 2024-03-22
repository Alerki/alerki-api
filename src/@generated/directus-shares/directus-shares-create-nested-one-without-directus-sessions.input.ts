import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_sessionsInput } from './directus-shares-create-without-directus-sessions.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_sessionsInput } from './directus-shares-create-or-connect-without-directus-sessions.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';

@InputType()
export class directus_sharesCreateNestedOneWithoutDirectus_sessionsInput {

    @Field(() => directus_sharesCreateWithoutDirectus_sessionsInput, {nullable:true})
    @Type(() => directus_sharesCreateWithoutDirectus_sessionsInput)
    create?: directus_sharesCreateWithoutDirectus_sessionsInput;

    @Field(() => directus_sharesCreateOrConnectWithoutDirectus_sessionsInput, {nullable:true})
    @Type(() => directus_sharesCreateOrConnectWithoutDirectus_sessionsInput)
    connectOrCreate?: directus_sharesCreateOrConnectWithoutDirectus_sessionsInput;

    @Field(() => directus_sharesWhereUniqueInput, {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>;
}
