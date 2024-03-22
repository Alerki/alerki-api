import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_settingsCreateWithoutDirectus_foldersInput } from './directus-settings-create-without-directus-folders.input';
import { Type } from 'class-transformer';
import { directus_settingsCreateOrConnectWithoutDirectus_foldersInput } from './directus-settings-create-or-connect-without-directus-folders.input';
import { directus_settingsUpsertWithWhereUniqueWithoutDirectus_foldersInput } from './directus-settings-upsert-with-where-unique-without-directus-folders.input';
import { directus_settingsCreateManyDirectus_foldersInputEnvelope } from './directus-settings-create-many-directus-folders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_settingsWhereUniqueInput } from './directus-settings-where-unique.input';
import { directus_settingsUpdateWithWhereUniqueWithoutDirectus_foldersInput } from './directus-settings-update-with-where-unique-without-directus-folders.input';
import { directus_settingsUpdateManyWithWhereWithoutDirectus_foldersInput } from './directus-settings-update-many-with-where-without-directus-folders.input';
import { directus_settingsScalarWhereInput } from './directus-settings-scalar-where.input';

@InputType()
export class directus_settingsUncheckedUpdateManyWithoutDirectus_foldersNestedInput {

    @Field(() => [directus_settingsCreateWithoutDirectus_foldersInput], {nullable:true})
    @Type(() => directus_settingsCreateWithoutDirectus_foldersInput)
    create?: Array<directus_settingsCreateWithoutDirectus_foldersInput>;

    @Field(() => [directus_settingsCreateOrConnectWithoutDirectus_foldersInput], {nullable:true})
    @Type(() => directus_settingsCreateOrConnectWithoutDirectus_foldersInput)
    connectOrCreate?: Array<directus_settingsCreateOrConnectWithoutDirectus_foldersInput>;

    @Field(() => [directus_settingsUpsertWithWhereUniqueWithoutDirectus_foldersInput], {nullable:true})
    @Type(() => directus_settingsUpsertWithWhereUniqueWithoutDirectus_foldersInput)
    upsert?: Array<directus_settingsUpsertWithWhereUniqueWithoutDirectus_foldersInput>;

    @Field(() => directus_settingsCreateManyDirectus_foldersInputEnvelope, {nullable:true})
    @Type(() => directus_settingsCreateManyDirectus_foldersInputEnvelope)
    createMany?: directus_settingsCreateManyDirectus_foldersInputEnvelope;

    @Field(() => [directus_settingsWhereUniqueInput], {nullable:true})
    @Type(() => directus_settingsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_settingsWhereUniqueInput], {nullable:true})
    @Type(() => directus_settingsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_settingsWhereUniqueInput], {nullable:true})
    @Type(() => directus_settingsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_settingsWhereUniqueInput], {nullable:true})
    @Type(() => directus_settingsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_settingsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_settingsUpdateWithWhereUniqueWithoutDirectus_foldersInput], {nullable:true})
    @Type(() => directus_settingsUpdateWithWhereUniqueWithoutDirectus_foldersInput)
    update?: Array<directus_settingsUpdateWithWhereUniqueWithoutDirectus_foldersInput>;

    @Field(() => [directus_settingsUpdateManyWithWhereWithoutDirectus_foldersInput], {nullable:true})
    @Type(() => directus_settingsUpdateManyWithWhereWithoutDirectus_foldersInput)
    updateMany?: Array<directus_settingsUpdateManyWithWhereWithoutDirectus_foldersInput>;

    @Field(() => [directus_settingsScalarWhereInput], {nullable:true})
    @Type(() => directus_settingsScalarWhereInput)
    deleteMany?: Array<directus_settingsScalarWhereInput>;
}
