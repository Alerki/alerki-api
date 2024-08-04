import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_panelsWhereUniqueInput } from './directus-panels-where-unique.input';
import { Type } from 'class-transformer';
import { directus_panelsUpdateWithoutDirectus_usersInput } from './directus-panels-update-without-directus-users.input';

@InputType()
export class directus_panelsUpdateWithWhereUniqueWithoutDirectus_usersInput {
  @Field(() => directus_panelsWhereUniqueInput, { nullable: false })
  @Type(() => directus_panelsWhereUniqueInput)
  where!: Prisma.AtLeast<directus_panelsWhereUniqueInput, 'id'>;

  @Field(() => directus_panelsUpdateWithoutDirectus_usersInput, {
    nullable: false,
  })
  @Type(() => directus_panelsUpdateWithoutDirectus_usersInput)
  data!: directus_panelsUpdateWithoutDirectus_usersInput;
}
