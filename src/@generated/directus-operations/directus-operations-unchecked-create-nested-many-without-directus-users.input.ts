import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateWithoutDirectus_usersInput } from './directus-operations-create-without-directus-users.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateOrConnectWithoutDirectus_usersInput } from './directus-operations-create-or-connect-without-directus-users.input';
import { directus_operationsCreateManyDirectus_usersInputEnvelope } from './directus-operations-create-many-directus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';

@InputType()
export class directus_operationsUncheckedCreateNestedManyWithoutDirectus_usersInput {
  @Field(() => [directus_operationsCreateWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_operationsCreateWithoutDirectus_usersInput)
  create?: Array<directus_operationsCreateWithoutDirectus_usersInput>;

  @Field(() => [directus_operationsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true,
  })
  @Type(() => directus_operationsCreateOrConnectWithoutDirectus_usersInput)
  connectOrCreate?: Array<directus_operationsCreateOrConnectWithoutDirectus_usersInput>;

  @Field(() => directus_operationsCreateManyDirectus_usersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_operationsCreateManyDirectus_usersInputEnvelope)
  createMany?: directus_operationsCreateManyDirectus_usersInputEnvelope;

  @Field(() => [directus_operationsWhereUniqueInput], { nullable: true })
  @Type(() => directus_operationsWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      directus_operationsWhereUniqueInput,
      'id' | 'resolve' | 'reject'
    >
  >;
}
