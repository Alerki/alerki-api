import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_revisionsUpdateWithoutDirectus_versionsInput } from './directus-revisions-update-without-directus-versions.input';
import { directus_revisionsCreateWithoutDirectus_versionsInput } from './directus-revisions-create-without-directus-versions.input';

@InputType()
export class directus_revisionsUpsertWithWhereUniqueWithoutDirectus_versionsInput {

    @Field(() => directus_revisionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_revisionsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>;

    @Field(() => directus_revisionsUpdateWithoutDirectus_versionsInput, {nullable:false})
    @Type(() => directus_revisionsUpdateWithoutDirectus_versionsInput)
    update!: directus_revisionsUpdateWithoutDirectus_versionsInput;

    @Field(() => directus_revisionsCreateWithoutDirectus_versionsInput, {nullable:false})
    @Type(() => directus_revisionsCreateWithoutDirectus_versionsInput)
    create!: directus_revisionsCreateWithoutDirectus_versionsInput;
}
