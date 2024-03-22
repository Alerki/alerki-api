import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateManyDirectus_revisionsInput } from './directus-revisions-create-many-directus-revisions.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_revisionsCreateManyDirectus_revisionsInputEnvelope {

    @Field(() => [directus_revisionsCreateManyDirectus_revisionsInput], {nullable:false})
    @Type(() => directus_revisionsCreateManyDirectus_revisionsInput)
    data!: Array<directus_revisionsCreateManyDirectus_revisionsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
