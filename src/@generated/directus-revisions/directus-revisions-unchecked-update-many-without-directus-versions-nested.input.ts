import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutDirectus_versionsInput } from './directus-revisions-create-without-directus-versions.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutDirectus_versionsInput } from './directus-revisions-create-or-connect-without-directus-versions.input';
import { directus_revisionsUpsertWithWhereUniqueWithoutDirectus_versionsInput } from './directus-revisions-upsert-with-where-unique-without-directus-versions.input';
import { directus_revisionsCreateManyDirectus_versionsInputEnvelope } from './directus-revisions-create-many-directus-versions-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { directus_revisionsUpdateWithWhereUniqueWithoutDirectus_versionsInput } from './directus-revisions-update-with-where-unique-without-directus-versions.input';
import { directus_revisionsUpdateManyWithWhereWithoutDirectus_versionsInput } from './directus-revisions-update-many-with-where-without-directus-versions.input';
import { directus_revisionsScalarWhereInput } from './directus-revisions-scalar-where.input';

@InputType()
export class directus_revisionsUncheckedUpdateManyWithoutDirectus_versionsNestedInput {

    @Field(() => [directus_revisionsCreateWithoutDirectus_versionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateWithoutDirectus_versionsInput)
    create?: Array<directus_revisionsCreateWithoutDirectus_versionsInput>;

    @Field(() => [directus_revisionsCreateOrConnectWithoutDirectus_versionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateOrConnectWithoutDirectus_versionsInput)
    connectOrCreate?: Array<directus_revisionsCreateOrConnectWithoutDirectus_versionsInput>;

    @Field(() => [directus_revisionsUpsertWithWhereUniqueWithoutDirectus_versionsInput], {nullable:true})
    @Type(() => directus_revisionsUpsertWithWhereUniqueWithoutDirectus_versionsInput)
    upsert?: Array<directus_revisionsUpsertWithWhereUniqueWithoutDirectus_versionsInput>;

    @Field(() => directus_revisionsCreateManyDirectus_versionsInputEnvelope, {nullable:true})
    @Type(() => directus_revisionsCreateManyDirectus_versionsInputEnvelope)
    createMany?: directus_revisionsCreateManyDirectus_versionsInputEnvelope;

    @Field(() => [directus_revisionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_revisionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_revisionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_revisionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_revisionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_revisionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_revisionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_revisionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;

    @Field(() => [directus_revisionsUpdateWithWhereUniqueWithoutDirectus_versionsInput], {nullable:true})
    @Type(() => directus_revisionsUpdateWithWhereUniqueWithoutDirectus_versionsInput)
    update?: Array<directus_revisionsUpdateWithWhereUniqueWithoutDirectus_versionsInput>;

    @Field(() => [directus_revisionsUpdateManyWithWhereWithoutDirectus_versionsInput], {nullable:true})
    @Type(() => directus_revisionsUpdateManyWithWhereWithoutDirectus_versionsInput)
    updateMany?: Array<directus_revisionsUpdateManyWithWhereWithoutDirectus_versionsInput>;

    @Field(() => [directus_revisionsScalarWhereInput], {nullable:true})
    @Type(() => directus_revisionsScalarWhereInput)
    deleteMany?: Array<directus_revisionsScalarWhereInput>;
}
