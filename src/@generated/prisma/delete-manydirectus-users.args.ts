import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_usersWhereInput } from '../directus-users/directus-users-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusUsersArgs {
  @Field(() => directus_usersWhereInput, { nullable: true })
  @Type(() => directus_usersWhereInput)
  where?: directus_usersWhereInput;
}
