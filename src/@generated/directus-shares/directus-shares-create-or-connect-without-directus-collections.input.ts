import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sharesCreateWithoutDirectus_collectionsInput } from './directus-shares-create-without-directus-collections.input';

@InputType()
export class directus_sharesCreateOrConnectWithoutDirectus_collectionsInput {

    @Field(() => directus_sharesWhereUniqueInput, {nullable:false})
    @Type(() => directus_sharesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>;

    @Field(() => directus_sharesCreateWithoutDirectus_collectionsInput, {nullable:false})
    @Type(() => directus_sharesCreateWithoutDirectus_collectionsInput)
    create!: directus_sharesCreateWithoutDirectus_collectionsInput;
}
