import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersWhereUniqueInput } from '../directus-users/directus-users-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusUsersOrThrowArgs {
  @Field(() => directus_usersWhereUniqueInput, { nullable: false })
  @Type(() => directus_usersWhereUniqueInput)
  where!: directus_usersWhereUniqueInput;
}
