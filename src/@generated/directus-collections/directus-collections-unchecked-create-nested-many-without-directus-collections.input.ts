import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsCreateWithoutDirectus_collectionsInput } from './directus-collections-create-without-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput } from './directus-collections-create-or-connect-without-directus-collections.input';
import { directus_collectionsCreateManyDirectus_collectionsInputEnvelope } from './directus-collections-create-many-directus-collections-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';

@InputType()
export class directus_collectionsUncheckedCreateNestedManyWithoutDirectus_collectionsInput {

    @Field(() => [directus_collectionsCreateWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_collectionsCreateWithoutDirectus_collectionsInput)
    create?: Array<directus_collectionsCreateWithoutDirectus_collectionsInput>;

    @Field(() => [directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput)
    connectOrCreate?: Array<directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput>;

    @Field(() => directus_collectionsCreateManyDirectus_collectionsInputEnvelope, {nullable:true})
    @Type(() => directus_collectionsCreateManyDirectus_collectionsInputEnvelope)
    createMany?: directus_collectionsCreateManyDirectus_collectionsInputEnvelope;

    @Field(() => [directus_collectionsWhereUniqueInput], {nullable:true})
    @Type(() => directus_collectionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>>;
}
