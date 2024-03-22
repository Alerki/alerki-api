import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsCreateInput } from '../directus-revisions/directus-revisions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusRevisionsArgs {

    @Field(() => directus_revisionsCreateInput, {nullable:false})
    @Type(() => directus_revisionsCreateInput)
    data!: directus_revisionsCreateInput;
}
