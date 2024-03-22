import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutDirectus_revisionsInput } from './directus-revisions-create-without-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput } from './directus-revisions-create-or-connect-without-directus-revisions.input';
import { directus_revisionsCreateManyDirectus_revisionsInputEnvelope } from './directus-revisions-create-many-directus-revisions-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';

@InputType()
export class directus_revisionsUncheckedCreateNestedManyWithoutDirectus_revisionsInput {

    @Field(() => [directus_revisionsCreateWithoutDirectus_revisionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateWithoutDirectus_revisionsInput)
    create?: Array<directus_revisionsCreateWithoutDirectus_revisionsInput>;

    @Field(() => [directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput], {nullable:true})
    @Type(() => directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput)
    connectOrCreate?: Array<directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput>;

    @Field(() => directus_revisionsCreateManyDirectus_revisionsInputEnvelope, {nullable:true})
    @Type(() => directus_revisionsCreateManyDirectus_revisionsInputEnvelope)
    createMany?: directus_revisionsCreateManyDirectus_revisionsInputEnvelope;

    @Field(() => [directus_revisionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_revisionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>>;
}
