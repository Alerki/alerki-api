import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsCreateManyInput } from '../directus-revisions/directus-revisions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusRevisionsArgs {

    @Field(() => [directus_revisionsCreateManyInput], {nullable:false})
    @Type(() => directus_revisionsCreateManyInput)
    data!: Array<directus_revisionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
