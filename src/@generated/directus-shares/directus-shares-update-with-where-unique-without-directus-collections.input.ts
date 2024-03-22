import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_sharesWhereUniqueInput } from './directus-shares-where-unique.input';
import { Type } from 'class-transformer';
import { directus_sharesUpdateWithoutDirectus_collectionsInput } from './directus-shares-update-without-directus-collections.input';

@InputType()
export class directus_sharesUpdateWithWhereUniqueWithoutDirectus_collectionsInput {

    @Field(() => directus_sharesWhereUniqueInput, {nullable:false})
    @Type(() => directus_sharesWhereUniqueInput)
    where!: Prisma.AtLeast<directus_sharesWhereUniqueInput, 'id'>;

    @Field(() => directus_sharesUpdateWithoutDirectus_collectionsInput, {nullable:false})
    @Type(() => directus_sharesUpdateWithoutDirectus_collectionsInput)
    data!: directus_sharesUpdateWithoutDirectus_collectionsInput;
}
