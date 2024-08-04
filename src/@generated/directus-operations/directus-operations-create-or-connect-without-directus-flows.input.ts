import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_operationsWhereUniqueInput } from './directus-operations-where-unique.input';
import { Type } from 'class-transformer';
import { directus_operationsCreateWithoutDirectus_flowsInput } from './directus-operations-create-without-directus-flows.input';

@InputType()
export class directus_operationsCreateOrConnectWithoutDirectus_flowsInput {
  @Field(() => directus_operationsWhereUniqueInput, { nullable: false })
  @Type(() => directus_operationsWhereUniqueInput)
  where!: Prisma.AtLeast<
    directus_operationsWhereUniqueInput,
    'id' | 'resolve' | 'reject'
  >;

  @Field(() => directus_operationsCreateWithoutDirectus_flowsInput, {
    nullable: false,
  })
  @Type(() => directus_operationsCreateWithoutDirectus_flowsInput)
  create!: directus_operationsCreateWithoutDirectus_flowsInput;
}
