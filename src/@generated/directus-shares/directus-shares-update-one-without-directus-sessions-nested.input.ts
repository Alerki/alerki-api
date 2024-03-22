import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_sessionsInput } from './directus-shares-create-without-directus-sessions.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_sessionsInput } from './directus-shares-create-or-connect-without-directus-sessions.input';
import { directus_sharesUpsertWithoutDirectus_sessionsInput } from './directus-shares-upsert-without-directus-sessions.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { directus_sharesUpdateWithoutDirectus_sessionsInput } from './directus-shares-update-without-directus-sessions.input';

@InputType()
export class directus_sharesUpdateOneWithoutDirectus_sessionsNestedInput {

    @Field(() => directus_sharesCreateWithoutDirectus_sessionsInput, {nullable:true})
    @Type(() => directus_sharesCreateWithoutDirectus_sessionsInput)
    create?: directus_sharesCreateWithoutDirectus_sessionsInput;

    @Field(() => directus_sharesCreateOrConnectWithoutDirectus_sessionsInput, {nullable:true})
    @Type(() => directus_sharesCreateOrConnectWithoutDirectus_sessionsInput)
    connectOrCreate?: directus_sharesCreateOrConnectWithoutDirectus_sessionsInput;

    @Field(() => directus_sharesUpsertWithoutDirectus_sessionsInput, {nullable:true})
    @Type(() => directus_sharesUpsertWithoutDirectus_sessionsInput)
    upsert?: directus_sharesUpsertWithoutDirectus_sessionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => directus_sharesWhereUniqueInput, {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>;

    @Field(() => directus_sharesUpdateWithoutDirectus_sessionsInput, {nullable:true})
    @Type(() => directus_sharesUpdateWithoutDirectus_sessionsInput)
    update?: directus_sharesUpdateWithoutDirectus_sessionsInput;
}
