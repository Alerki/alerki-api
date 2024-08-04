import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sessionsCreateWithoutDirectus_usersInput } from './directus-sessions-create-without-directus-users.input';

@InputType()
export class directus_sessionsCreateOrConnectWithoutDirectus_usersInput {
  @Field(() => directus_sessionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_sessionsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>;

  @Field(() => directus_sessionsCreateWithoutDirectus_usersInput, {
    nullable: false,
  })
  @Type(() => directus_sessionsCreateWithoutDirectus_usersInput)
  create!: directus_sessionsCreateWithoutDirectus_usersInput;
}
