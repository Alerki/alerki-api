import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sessionsUpdateWithoutDirectus_sharesInput } from './directus-sessions-update-without-directus-shares.input';

@InputType()
export class directus_sessionsUpdateWithWhereUniqueWithoutDirectus_sharesInput {

    @Field(() => directus_sessionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_sessionsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>;

    @Field(() => directus_sessionsUpdateWithoutDirectus_sharesInput, {nullable:false})
    @Type(() => directus_sessionsUpdateWithoutDirectus_sharesInput)
    data!: directus_sessionsUpdateWithoutDirectus_sharesInput;
}
