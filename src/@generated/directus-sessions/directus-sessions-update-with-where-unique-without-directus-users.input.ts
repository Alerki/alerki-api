import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sessionsUpdateWithoutDirectus_usersInput } from './directus-sessions-update-without-directus-users.input';

@InputType()
export class directus_sessionsUpdateWithWhereUniqueWithoutDirectus_usersInput {
  @Field(() => directus_sessionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_sessionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>;

  @Field(() => directus_sessionsUpdateWithoutDirectus_usersInput, {
    nullable: false,
  })
  @Type(() => directus_sessionsUpdateWithoutDirectus_usersInput)
  data!: directus_sessionsUpdateWithoutDirectus_usersInput;
}
