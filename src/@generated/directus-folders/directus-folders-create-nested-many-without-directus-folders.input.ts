import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_foldersCreateWithoutDirectus_foldersInput } from './directus-folders-create-without-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_foldersCreateOrConnectWithoutDirectus_foldersInput } from './directus-folders-create-or-connect-without-directus-folders.input';
import { directus_foldersCreateManyDirectus_foldersInputEnvelope } from './directus-folders-create-many-directus-folders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_foldersWhereUniqueInput } from './directus-folders-where-unique.input';

@InputType()
export class directus_foldersCreateNestedManyWithoutDirectus_foldersInput {
  @Field(() => [directus_foldersCreateWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_foldersCreateWithoutDirectus_foldersInput)
  create?: Array<directus_foldersCreateWithoutDirectus_foldersInput>;

  @Field(() => [directus_foldersCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true,
  })
  @Type(() => directus_foldersCreateOrConnectWithoutDirectus_foldersInput)
  connectOrCreate?: Array<directus_foldersCreateOrConnectWithoutDirectus_foldersInput>;

  @Field(() => directus_foldersCreateManyDirectus_foldersInputEnvelope, {
    nullable: true,
  })
  @Type(() => directus_foldersCreateManyDirectus_foldersInputEnvelope)
  createMany?: directus_foldersCreateManyDirectus_foldersInputEnvelope;

  @Field(() => [directus_foldersWhereUniqueInput], { nullable: true })
  @Type(() => directus_foldersWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<directus_foldersWhereUniqueInput, 'id'>>;
}
