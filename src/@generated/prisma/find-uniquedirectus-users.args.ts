import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersWhereUniqueInput } from '../directus-users/directus-users-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusUsersArgs {
  @Field(() => directus_usersWhereUniqueInput, { nullable: false })
  @Type(() => directus_usersWhereUniqueInput)
  where!: directus_usersWhereUniqueInput;
}
