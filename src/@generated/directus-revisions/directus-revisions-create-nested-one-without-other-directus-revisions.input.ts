import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateWithoutOther_directus_revisionsInput } from './directus-revisions-create-without-other-directus-revisions.input';
import { Type } from 'class-transformer';
import { directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput } from './directus-revisions-create-or-connect-without-other-directus-revisions.input';
import { Prisma } from '@prisma/client';
import { directus_revisionsWhereUniqueInput } from './directus-revisions-where-unique.input';

@InputType()
export class directus_revisionsCreateNestedOneWithoutOther_directus_revisionsInput {

    @Field(() => directus_revisionsCreateWithoutOther_directus_revisionsInput, {nullable:true})
    @Type(() => directus_revisionsCreateWithoutOther_directus_revisionsInput)
    create?: directus_revisionsCreateWithoutOther_directus_revisionsInput;

    @Field(() => directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput, {nullable:true})
    @Type(() => directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput)
    connectOrCreate?: directus_revisionsCreateOrConnectWithoutOther_directus_revisionsInput;

    @Field(() => directus_revisionsWhereUniqueInput, {nullable:true})
    @Type(() => directus_revisionsWhereUniqueInput)
    connect?: Prisma.AtLeast<directus_revisionsWhereUniqueInput, 'id'>;
}
