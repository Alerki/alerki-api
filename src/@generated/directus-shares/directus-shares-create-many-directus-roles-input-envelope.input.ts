import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateManyDirectus_rolesInput } from './directus-shares-create-many-directus-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_sharesCreateManyDirectus_rolesInputEnvelope {
  @Field(() => [directus_sharesCreateManyDirectus_rolesInput], {
    nullable: false,
  })
  @Type(() => directus_sharesCreateManyDirectus_rolesInput)
  data!: Array<directus_sharesCreateManyDirectus_rolesInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
