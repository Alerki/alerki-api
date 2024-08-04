import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_rolesWhereUniqueInput } from './directus-roles-where-unique.input';
import { Type } from 'class-transformer';
import { directus_rolesCreateWithoutDirectus_sharesInput } from './directus-roles-create-without-directus-shares.input';

@InputType()
export class directus_rolesCreateOrConnectWithoutDirectus_sharesInput {
  @Field(() => directus_rolesWhereUniqueInput, { nullable: false })
  @Type(() => directus_rolesWhereUniqueInput)
  where!: Prisma.AtLeast<directus_rolesWhereUniqueInput, 'id'>;

  @Field(() => directus_rolesCreateWithoutDirectus_sharesInput, {
    nullable: false,
  })
  @Type(() => directus_rolesCreateWithoutDirectus_sharesInput)
  create!: directus_rolesCreateWithoutDirectus_sharesInput;
}
