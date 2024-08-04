import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateWithoutDirectus_usersInput } from './directus-operations-create-without-directus-users.input';

@InputType()
export class directus_operationsCreateOrConnectWithoutDirectus_usersInput {
  @Field(() => directus_operationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_operationsWhereUniqueInput)
  where!: Prisma.AtLeast<
    directus_operationsWhereUniqueInput,
    'id' | 'resolve' | 'reject'
  >;

  @Field(() => directus_operationsCreateWithoutDirectus_usersInput, {
    nullable: false,
  })
  @Type(() => directus_operationsCreateWithoutDirectus_usersInput)
  create!: directus_operationsCreateWithoutDirectus_usersInput;
}
