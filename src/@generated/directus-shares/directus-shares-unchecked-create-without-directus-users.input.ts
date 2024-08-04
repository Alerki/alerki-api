import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { directus_sessionsUncheckedCreateNestedManyWithoutDirectus_sharesInput } from '../directus-sessions/directus-sessions-unchecked-create-nested-many-without-directus-shares.input';

@InputType()
export class directus_sharesUncheckedCreateWithoutDirectus_usersInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_start?: Date | string;

  @Field(() => Date, { nullable: true })
  date_end?: Date | string;

  @Field(() => Int, { nullable: true })
  times_used?: number;

  @Field(() => Int, { nullable: true })
  max_uses?: number;

  @Field(
    () => directus_sessionsUncheckedCreateNestedManyWithoutDirectus_sharesInput,
    { nullable: true },
  )
  directus_sessions?: directus_sessionsUncheckedCreateNestedManyWithoutDirectus_sharesInput;
}
