import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateWithoutDirectus_revisionsInput } from './directus-revisions-create-without-directus-revisions.input';

@InputType()
export class directus_revisionsCreateOrConnectWithoutDirectus_revisionsInput {

    @Field(() => directus_revisionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_revisionsWhereUniqueInput)
    where!: Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>;

    @Field(() => directus_revisionsCreateWithoutDirectus_revisionsInput, {nullable:false})
    @Type(() => directus_revisionsCreateWithoutDirectus_revisionsInput)
    create!: directus_revisionsCreateWithoutDirectus_revisionsInput;
}
