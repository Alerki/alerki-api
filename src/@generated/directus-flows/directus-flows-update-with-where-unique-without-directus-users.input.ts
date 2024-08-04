import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_flowsWhereUniqueInput } from './directus-flows-where-unique.input';
import { Type } from 'class-transformer';
import { directus_flowsUpdateWithoutDirectus_usersInput } from './directus-flows-update-without-directus-users.input';

@InputType()
export class directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput {
  @Field(() => directus_flowsWhereUniqueInput, { nullable: false })
  @Type(() => directus_flowsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_flowsWhereUniqueInput, 'id' | 'operation'>;

  @Field(() => directus_flowsUpdateWithoutDirectus_usersInput, {
    nullable: false,
  })
  @Type(() => directus_flowsUpdateWithoutDirectus_usersInput)
  data!: directus_flowsUpdateWithoutDirectus_usersInput;
}
