import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_versionsCreateWithoutDirectus_collectionsInput } from './directus-versions-create-without-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_versionsCreateOrConnectWithoutDirectus_collectionsInput } from './directus-versions-create-or-connect-without-directus-collections.input';
import { directus_versionsCreateManyDirectus_collectionsInputEnvelope } from './directus-versions-create-many-directus-collections-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_versionsWhereUniqueInput } from './directus-versions-where-unique.input';

@InputType()
export class directus_versionsCreateNestedManyWithoutDirectus_collectionsInput {

    @Field(() => [directus_versionsCreateWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_versionsCreateWithoutDirectus_collectionsInput)
    create?: Array<directus_versionsCreateWithoutDirectus_collectionsInput>;

    @Field(() => [directus_versionsCreateOrConnectWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_versionsCreateOrConnectWithoutDirectus_collectionsInput)
    connectOrCreate?: Array<directus_versionsCreateOrConnectWithoutDirectus_collectionsInput>;

    @Field(() => directus_versionsCreateManyDirectus_collectionsInputEnvelope, {nullable:true})
    @Type(() => directus_versionsCreateManyDirectus_collectionsInputEnvelope)
    createMany?: directus_versionsCreateManyDirectus_collectionsInputEnvelope;

    @Field(() => [directus_versionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_versionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_versionsWhereUniqueInput, 'id'>>;
}
