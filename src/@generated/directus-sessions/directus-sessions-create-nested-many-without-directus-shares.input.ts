import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsCreateWithoutDirectus_sharesInput } from './directus-sessions-create-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_sessionsCreateOrConnectWithoutDirectus_sharesInput } from './directus-sessions-create-or-connect-without-directus-shares.input';
import { directus_sessionsCreateManyDirectus_sharesInputEnvelope } from './directus-sessions-create-many-directus-shares-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sessionsWhereUniqueInput } from './directus-sessions-where-unique.input';

@InputType()
export class directus_sessionsCreateNestedManyWithoutDirectus_sharesInput {
  @Field(() => [directus_sessionsCreateWithoutDirectus_sharesInput], {
    nullable: true,
  })
  @Type(() => directus_sessionsCreateWithoutDirectus_sharesInput)
  create?: Array<directus_sessionsCreateWithoutDirectus_sharesInput>;

  @Field(() => [directus_sessionsCreateOrConnectWithoutDirectus_sharesInput], {
    nullable: true,
  })
  @Type(() => directus_sessionsCreateOrConnectWithoutDirectus_sharesInput)
  connectOrCreate?: Array<directus_sessionsCreateOrConnectWithoutDirectus_sharesInput>;

  @Field(() => directus_sessionsCreateManyDirectus_sharesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_sessionsCreateManyDirectus_sharesInputEnvelope)
  createMany?: directus_sessionsCreateManyDirectus_sharesInputEnvelope;

  @Field(() => [directus_sessionsWhereUniqueInput], { nullable: true })
  @Type(() => directus_sessionsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_sessionsWhereUniqueInput, 'token'>>;
}
