import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_collectionsCreateWithoutDirectus_sharesInput } from './directus-collections-create-without-directus-shares.input';
import { Type } from 'class-transformer';
import { directus_collectionsCreateOrConnectWithoutDirectus_sharesInput } from './directus-collections-create-or-connect-without-directus-shares.input';
import { directus_collectionsUpsertWithoutDirectus_sharesInput } from './directus-collections-upsert-without-directus-shares.input';
import { Prisma } from '@prisma/client';
import { directus_collectionsWhereUniqueInput } from './directus-collections-where-unique.input';
import { directus_collectionsUpdateWithoutDirectus_sharesInput } from './directus-collections-update-without-directus-shares.input';

@InputType()
export class directus_collectionsUpdateOneRequiredWithoutDirectus_sharesNestedInput {

    @Field(() => directus_collectionsCreateWithoutDirectus_sharesInput, {nullable:true})
    @Type(() => directus_collectionsCreateWithoutDirectus_sharesInput)
    create?: directus_collectionsCreateWithoutDirectus_sharesInput;

    @Field(() => directus_collectionsCreateOrConnectWithoutDirectus_sharesInput, {nullable:true})
    @Type(() => directus_collectionsCreateOrConnectWithoutDirectus_sharesInput)
    connectOrCreate?: directus_collectionsCreateOrConnectWithoutDirectus_sharesInput;

    @Field(() => directus_collectionsUpsertWithoutDirectus_sharesInput, {nullable:true})
    @Type(() => directus_collectionsUpsertWithoutDirectus_sharesInput)
    upsert?: directus_collectionsUpsertWithoutDirectus_sharesInput;

    @Field(() => directus_collectionsWhereUniqueInput, {nullable:true})
    @Type(() => directus_collectionsWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_collectionsWhereUniqueInput, 'collection'>;

    @Field(() => directus_collectionsUpdateWithoutDirectus_sharesInput, {nullable:true})
    @Type(() => directus_collectionsUpdateWithoutDirectus_sharesInput)
    update?: directus_collectionsUpdateWithoutDirectus_sharesInput;
}
