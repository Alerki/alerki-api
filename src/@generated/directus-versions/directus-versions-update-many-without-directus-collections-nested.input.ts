import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateWithoutDirectus_collectionsInput } from './directus-versions-create-without-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateOrConnectWithoutDirectus_collectionsInput } from './directus-versions-create-or-connect-without-directus-collections.input';
import { directus_versionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput } from './directus-versions-upsert-with-where-unique-without-directus-collections.input';
import { directus_versionsCreateManyDirectus_collectionsInputEnvelope } from './directus-versions-create-many-directus-collections-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';
import { directus_versionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput } from './directus-versions-update-with-where-unique-without-directus-collections.input';
import { directus_versionsUpdateManyWithWhereWithoutDirectus_collectionsInput } from './directus-versions-update-many-with-where-without-directus-collections.input';
import { directus_versionsScalarWhereInput } from './directus-versions-scalar-where.input';

@InputType()
export class directus_versionsUpdateManyWithoutDirectus_collectionsNestedInput {

    @Field(() => [directus_versionsCreateWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_versionsCreateWithoutDirectus_collectionsInput)
    create?: Array<directus_versionsCreateWithoutDirectus_collectionsInput>;

    @Field(() => [directus_versionsCreateOrConnectWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_versionsCreateOrConnectWithoutDirectus_collectionsInput)
    connectOrCreate?: Array<directus_versionsCreateOrConnectWithoutDirectus_collectionsInput>;

    @Field(() => [directus_versionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_versionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput)
    upsert?: Array<directus_versionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput>;

    @Field(() => directus_versionsCreateManyDirectus_collectionsInputEnvelope, {nullable:true})
    @Type(() => directus_versionsCreateManyDirectus_collectionsInputEnvelope)
    createMany?: directus_versionsCreateManyDirectus_collectionsInputEnvelope;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_versionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_versionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput)
    update?: Array<directus_versionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput>;

    @Field(() => [directus_versionsUpdateManyWithWhereWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_versionsUpdateManyWithWhereWithoutDirectus_collectionsInput)
    updateMany?: Array<directus_versionsUpdateManyWithWhereWithoutDirectus_collectionsInput>;

    @Field(() => [directus_versionsScalarWhereInput], {nullable:true})
    @Type(() => directus_versionsScalarWhereInput)
    deleteMany?: Array<directus_versionsScalarWhereInput>;
}
