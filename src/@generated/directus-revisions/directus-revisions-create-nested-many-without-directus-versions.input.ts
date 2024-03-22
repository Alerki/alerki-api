import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutDirectus_versionsInput } from './directus-revisions-create-without-directus-versions.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutDirectus_versionsInput } from './directus-revisions-create-or-connect-without-directus-versions.input';
import { directus_revisionsCreateManyDirectus_versionsInputEnvelope } from './directus-revisions-create-many-directus-versions-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';

@InputType()
export class directus_revisionsCreateNestedManyWithoutDirectus_versionsInput {

    @Field(() => [directus_revisionsCreateWithoutDirectus_versionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateWithoutDirectus_versionsInput)
    create?: Array<directus_revisionsCreateWithoutDirectus_versionsInput>;

    @Field(() => [directus_revisionsCreateOrConnectWithoutDirectus_versionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateOrConnectWithoutDirectus_versionsInput)
    connectOrCreate?: Array<directus_revisionsCreateOrConnectWithoutDirectus_versionsInput>;

    @Field(() => directus_revisionsCreateManyDirectus_versionsInputEnvelope, {nullable:true})
    @Type(() => directus_revisionsCreateManyDirectus_versionsInputEnvelope)
    createMany?: directus_revisionsCreateManyDirectus_versionsInputEnvelope;

    @Field(() => [directus_revisionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_revisionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;
}
