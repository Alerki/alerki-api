import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsCreateWithoutDirectus_versionsInput } from './directus-collections-create-without-directus-versions.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateOrConnectWithoutDirectus_versionsInput } from './directus-collections-create-or-connect-without-directus-versions.input';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';

@InputType()
export class directus_collectionsCreateNestedOneWithoutDirectus_versionsInput {

    @Field(() => directus_collectionsCreateWithoutDirectus_versionsInput, {nullable:true})
    @Type(() => directus_collectionsCreateWithoutDirectus_versionsInput)
    create?: directus_collectionsCreateWithoutDirectus_versionsInput;

    @Field(() => directus_collectionsCreateOrConnectWithoutDirectus_versionsInput, {nullable:true})
    @Type(() => directus_collectionsCreateOrConnectWithoutDirectus_versionsInput)
    connectOrCreate?: directus_collectionsCreateOrConnectWithoutDirectus_versionsInput;

    @Field(() => directus_collectionsWhereUniqueInput, {nullable:true})
    @Type(() => directus_collectionsWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>;
}
