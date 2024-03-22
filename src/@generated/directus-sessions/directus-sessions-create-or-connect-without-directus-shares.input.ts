import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sessionsCreateWithoutDirectus_sharesInput } from './directus-sessions-create-without-directus-shares.input';

@InputType()
export class directus_sessionsCreateOrConnectWithoutDirectus_sharesInput {

    @Field(() => directus_sessionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_sessionsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>;

    @Field(() => directus_sessionsCreateWithoutDirectus_sharesInput, {nullable:false})
    @Type(() => directus_sessionsCreateWithoutDirectus_sharesInput)
    create!: directus_sessionsCreateWithoutDirectus_sharesInput;
}
