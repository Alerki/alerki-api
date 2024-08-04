import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_presetsCreateWithoutDirectus_rolesInput } from './directus-presets-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_presetsCreateOrConnectWithoutDirectus_rolesInput } from './directus-presets-create-or-connect-without-directus-roles.input';
import { directus_presetsCreateManyDirectus_rolesInputEnvelope } from './directus-presets-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_presetsWhereUniqueInput } from './directus-presets-where-unique.input';

@InputType()
export class directus_presetsUncheckedCreateNestedManyWithoutDirectus_rolesInput {
  @Field(() => [directus_presetsCreateWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateWithoutDirectus_rolesInput)
  create?: Array<directus_presetsCreateWithoutDirectus_rolesInput>;

  @Field(() => [directus_presetsCreateOrConnectWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_presetsCreateOrConnectWithoutDirectus_rolesInput)
  connectOrCreate?: Array<directus_presetsCreateOrConnectWithoutDirectus_rolesInput>;

  @Field(() => directus_presetsCreateManyDirectus_rolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_presetsCreateManyDirectus_rolesInputEnvelope)
  createMany?: directus_presetsCreateManyDirectus_rolesInputEnvelope;

  @Field(() => [directus_presetsWhereUniqueInput], { nullable: true })
  @Type(() => directus_presetsWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_presetsWhereUniqueInput, 'id'>>;
}
