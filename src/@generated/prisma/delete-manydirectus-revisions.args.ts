import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsWhereInput } from '../directus-revisions/directus-revisions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusRevisionsArgs {

    @Field(() => directus_revisionsWhereInput, {nullable:true})
    @Type(() => directus_revisionsWhereInput)
    where?: directus_revisionsWhereInput;
}
