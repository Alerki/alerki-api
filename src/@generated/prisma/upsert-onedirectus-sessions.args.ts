import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sessionsWhereUniqueInput } from '../directus-sessions/directus-sessions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sessionsCreateInput } from '../directus-sessions/directus-sessions-create.input';
import { directus_sessionsUpdateInput } from '../directus-sessions/directus-sessions-update.input';

@ArgsType()
export class UpsertOnedirectusSessionsArgs {
  @Field(() => directus_sessionsWhereUniqueInput, { nullable: false })
  @Type(() => directus_sessionsWhereUniqueInput)
  where!: directus_sessionsWhereUniqueInput;

  @Field(() => directus_sessionsCreateInput, { nullable: false })
  @Type(() => directus_sessionsCreateInput)
  create!: directus_sessionsCreateInput;

  @Field(() => directus_sessionsUpdateInput, { nullable: false })
  @Type(() => directus_sessionsUpdateInput)
  update!: directus_sessionsUpdateInput;
}
