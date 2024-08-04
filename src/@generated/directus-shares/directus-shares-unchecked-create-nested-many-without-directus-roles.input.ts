import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_rolesInput } from './directus-shares-create-without-directus-roles.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_rolesInput } from './directus-shares-create-or-connect-without-directus-roles.input';
import { directus_sharesCreateManyDirectus_rolesInputEnvelope } from './directus-shares-create-many-directus-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';

@InputType()
export class directus_sharesUncheckedCreateNestedManyWithoutDirectus_rolesInput {
  @Field(() => [directus_sharesCreateWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_sharesCreateWithoutDirectus_rolesInput)
  create?: Array<directus_sharesCreateWithoutDirectus_rolesInput>;

  @Field(() => [directus_sharesCreateOrConnectWithoutDirectus_rolesInput], {
    nullable: true,
  })
  @Type(() => directus_sharesCreateOrConnectWithoutDirectus_rolesInput)
  connectOrCreate?: Array<directus_sharesCreateOrConnectWithoutDirectus_rolesInput>;

  @Field(() => directus_sharesCreateManyDirectus_rolesInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_sharesCreateManyDirectus_rolesInputEnvelope)
  createMany?: directus_sharesCreateManyDirectus_rolesInputEnvelope;

  @Field(() => [directus_sharesWhereUniqueInput], { nullable: true })
  @Type(() => directus_sharesWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;
}
