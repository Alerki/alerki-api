import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsUncheckedCreateNestedManyWithoutDirectus_versionsInput } from '../directus-revisions/directus-revisions-unchecked-create-nested-many-without-directus-versions.input';

@InputType()
export class directus_versionsUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  key!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => String, { nullable: true })
  hash?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(
    () =>
      directus_revisionsUncheckedCreateNestedManyWithoutDirectus_versionsInput,
    { nullable: true },
  )
  directus_revisions?: directus_revisionsUncheckedCreateNestedManyWithoutDirectus_versionsInput;
}
