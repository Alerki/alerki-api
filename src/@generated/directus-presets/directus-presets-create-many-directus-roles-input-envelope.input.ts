import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsCreateManyDirectus_rolesInput } from './directus-presets-create-many-directus-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_presetsCreateManyDirectus_rolesInputEnvelope {
  @Field(() => [directus_presetsCreateManyDirectus_rolesInput], {
    nullable: false,
  })
  @Type(() => directus_presetsCreateManyDirectus_rolesInput)
  data!: Array<directus_presetsCreateManyDirectus_rolesInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
