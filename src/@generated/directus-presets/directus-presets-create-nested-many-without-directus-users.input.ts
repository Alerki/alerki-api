import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsCreateWithoutDirectus_usersInput } from './directus-presets-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_presetsCreateOrConnectWithoutDirectus_usersInput } from './directus-presets-create-or-connect-without-directus-users.input';
import { directus_presetsCreateManyDirectus_usersInputEnvelope } from './directus-presets-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_presetsWhereUniqueInput } from './directus-presets-where-unique.input';

@InputType()
export class directus_presetsCreateNestedManyWithoutDirectus_usersInput {
  @Field(() => [directus_presetsCreateWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateWithoutDirectus_usersInput)
  create?: Array<directus_presetsCreateWithoutDirectus_usersInput>;

  @Field(() => [directus_presetsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateOrConnectWithoutDirectus_usersInput)
  connectOrCreate?: Array<directus_presetsCreateOrConnectWithoutDirectus_usersInput>;

  @Field(() => directus_presetsCreateManyDirectus_usersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_presetsCreateManyDirectus_usersInputEnvelope)
  createMany?: directus_presetsCreateManyDirectus_usersInputEnvelope;

  @Field(() => [directus_presetsWhereUniqueInput], { nullable: true })
  @Type(() => directus_presetsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>>;
}
