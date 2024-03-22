import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sharesCreateWithoutDirectus_collectionsInput } from './directus-shares-create-without-directus-collections.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateOrConnectWithoutDirectus_collectionsInput } from './directus-shares-create-or-connect-without-directus-collections.input';
import { directus_sharesUpsertWithWhereUniqueWithoutDirectus_collectionsInput } from './directus-shares-upsert-with-where-unique-without-directus-collections.input';
import { directus_sharesCreateManyDirectus_collectionsInputEnvelope } from './directus-shares-create-many-directus-collections-input-envelope.input';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { directus_sharesUpdateWithWhereUniqueWithoutDirectus_collectionsInput } from './directus-shares-update-with-where-unique-without-directus-collections.input';
import { directus_sharesUpdateManyWithWhereWithoutDirectus_collectionsInput } from './directus-shares-update-many-with-where-without-directus-collections.input';
import { directus_sharesScalarWhereInput } from './directus-shares-scalar-where.input';

@InputType()
export class directus_sharesUncheckedUpdateManyWithoutDirectus_collectionsNestedInput {

    @Field(() => [directus_sharesCreateWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_sharesCreateWithoutDirectus_collectionsInput)
    create?: Array<directus_sharesCreateWithoutDirectus_collectionsInput>;

    @Field(() => [directus_sharesCreateOrConnectWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_sharesCreateOrConnectWithoutDirectus_collectionsInput)
    connectOrCreate?: Array<directus_sharesCreateOrConnectWithoutDirectus_collectionsInput>;

    @Field(() => [directus_sharesUpsertWithWhereUniqueWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_sharesUpsertWithWhereUniqueWithoutDirectus_collectionsInput)
    upsert?: Array<directus_sharesUpsertWithWhereUniqueWithoutDirectus_collectionsInput>;

    @Field(() => directus_sharesCreateManyDirectus_collectionsInputEnvelope, {nullable:true})
    @Type(() => directus_sharesCreateManyDirectus_collectionsInputEnvelope)
    createMany?: directus_sharesCreateManyDirectus_collectionsInputEnvelope;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesWhereUniqueInput], {nullable:true})
    @Type(() => directus_sharesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>>;

    @Field(() => [directus_sharesUpdateWithWhereUniqueWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_sharesUpdateWithWhereUniqueWithoutDirectus_collectionsInput)
    update?: Array<directus_sharesUpdateWithWhereUniqueWithoutDirectus_collectionsInput>;

    @Field(() => [directus_sharesUpdateManyWithWhereWithoutDirectus_collectionsInput], {nullable:true})
    @Type(() => directus_sharesUpdateManyWithWhereWithoutDirectus_collectionsInput)
    updateMany?: Array<directus_sharesUpdateManyWithWhereWithoutDirectus_collectionsInput>;

    @Field(() => [directus_sharesScalarWhereInput], {nullable:true})
    @Type(() => directus_sharesScalarWhereInput)
    deleteMany?: Array<directus_sharesScalarWhereInput>;
}
