import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateWithoutLanguagesInput } from './service-translations-create-without-languages.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateOrConnectWithoutLanguagesInput } from './service-translations-create-or-connect-without-languages.input';
import { Service_translationsUpsertWithWhereUniqueWithoutLanguagesInput } from './service-translations-upsert-with-where-unique-without-languages.input';
import { Service_translationsCreateManyLanguagesInputEnvelope } from './service-translations-create-many-languages-input-envelope.input';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Service_translationsUpdateWithWhereUniqueWithoutLanguagesInput } from './service-translations-update-with-where-unique-without-languages.input';
import { Service_translationsUpdateManyWithWhereWithoutLanguagesInput } from './service-translations-update-many-with-where-without-languages.input';
import { Service_translationsScalarWhereInput } from './service-translations-scalar-where.input';

@InputType()
export class Service_translationsUpdateManyWithoutLanguagesNestedInput {
  @Field(() => [Service_translationsCreateWithoutLanguagesInput], {
    nullable: true,
  })
  @Type(() => Service_translationsCreateWithoutLanguagesInput)
  create?: Array<Service_translationsCreateWithoutLanguagesInput>;

  @Field(() => [Service_translationsCreateOrConnectWithoutLanguagesInput], {
    nullable: true,
  })
  @Type(() => Service_translationsCreateOrConnectWithoutLanguagesInput)
  connectOrCreate?: Array<Service_translationsCreateOrConnectWithoutLanguagesInput>;

  @Field(
    () => [Service_translationsUpsertWithWhereUniqueWithoutLanguagesInput],
    { nullable: true },
  )
  @Type(() => Service_translationsUpsertWithWhereUniqueWithoutLanguagesInput)
  upsert?: Array<Service_translationsUpsertWithWhereUniqueWithoutLanguagesInput>;

  @Field(() => Service_translationsCreateManyLanguagesInputEnvelope, {
    nullable: true,
  })
  @Type(() => Service_translationsCreateManyLanguagesInputEnvelope)
  createMany?: Service_translationsCreateManyLanguagesInputEnvelope;

  @Field(() => [Service_translationsWhereUniqueInput], { nullable: true })
  @Type(() => Service_translationsWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>
  >;

  @Field(() => [Service_translationsWhereUniqueInput], { nullable: true })
  @Type(() => Service_translationsWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>
  >;

  @Field(() => [Service_translationsWhereUniqueInput], { nullable: true })
  @Type(() => Service_translationsWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>
  >;

  @Field(() => [Service_translationsWhereUniqueInput], { nullable: true })
  @Type(() => Service_translationsWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>
  >;

  @Field(
    () => [Service_translationsUpdateWithWhereUniqueWithoutLanguagesInput],
    { nullable: true },
  )
  @Type(() => Service_translationsUpdateWithWhereUniqueWithoutLanguagesInput)
  update?: Array<Service_translationsUpdateWithWhereUniqueWithoutLanguagesInput>;

  @Field(() => [Service_translationsUpdateManyWithWhereWithoutLanguagesInput], {
    nullable: true,
  })
  @Type(() => Service_translationsUpdateManyWithWhereWithoutLanguagesInput)
  updateMany?: Array<Service_translationsUpdateManyWithWhereWithoutLanguagesInput>;

  @Field(() => [Service_translationsScalarWhereInput], { nullable: true })
  @Type(() => Service_translationsScalarWhereInput)
  deleteMany?: Array<Service_translationsScalarWhereInput>;
}
