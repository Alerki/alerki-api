import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutDirectus_revisionsInput } from './directus-revisions-create-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput } from './directus-revisions-create-or-connect-without-directus-revisions.input';
import { directus_revisionsUpsertWithWhereUniqueWithoutDirectus_revisionsInput } from './directus-revisions-upsert-with-where-unique-without-directus-revisions.input';
import { directus_revisionsCreateManyDirectus_revisionsInputEnvelope } from './directus-revisions-create-many-directus-revisions-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { directus_revisionsUpdateWithWhereUniqueWithoutDirectus_revisionsInput } from './directus-revisions-update-with-where-unique-without-directus-revisions.input';
import { directus_revisionsUpdateManyWithWhereWithoutDirectus_revisionsInput } from './directus-revisions-update-many-with-where-without-directus-revisions.input';
import { directus_revisionsScalarWhereInput } from './directus-revisions-scalar-where.input';

@InputType()
export class directus_revisionsUncheckedUpdateManyWithoutDirectus_revisionsNestedInput {

    @Field(() => [directus_revisionsCreateWithoutDirectus_revisionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateWithoutDirectus_revisionsInput)
    create?: Array<directus_revisionsCreateWithoutDirectus_revisionsInput>;

    @Field(() => [directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput)
    connectOrCreate?: Array<directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput>;

    @Field(() => [directus_revisionsUpsertWithWhereUniqueWithoutDirectus_revisionsInput], {nullable:true})
    @Type(() => directus_revisionsUpsertWithWhereUniqueWithoutDirectus_revisionsInput)
    upsert?: Array<directus_revisionsUpsertWithWhereUniqueWithoutDirectus_revisionsInput>;

    @Field(() => directus_revisionsCreateManyDirectus_revisionsInputEnvelope, {nullable:true})
    @Type(() => directus_revisionsCreateManyDirectus_revisionsInputEnvelope)
    createMany?: directus_revisionsCreateManyDirectus_revisionsInputEnvelope;

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

    @Field(() => [directus_revisionsUpdateWithWhereUniqueWithoutDirectus_revisionsInput], {nullable:true})
    @Type(() => directus_revisionsUpdateWithWhereUniqueWithoutDirectus_revisionsInput)
    update?: Array<directus_revisionsUpdateWithWhereUniqueWithoutDirectus_revisionsInput>;

    @Field(() => [directus_revisionsUpdateManyWithWhereWithoutDirectus_revisionsInput], {nullable:true})
    @Type(() => directus_revisionsUpdateManyWithWhereWithoutDirectus_revisionsInput)
    updateMany?: Array<directus_revisionsUpdateManyWithWhereWithoutDirectus_revisionsInput>;

    @Field(() => [directus_revisionsScalarWhereInput], {nullable:true})
    @Type(() => directus_revisionsScalarWhereInput)
    deleteMany?: Array<directus_revisionsScalarWhereInput>;
}
