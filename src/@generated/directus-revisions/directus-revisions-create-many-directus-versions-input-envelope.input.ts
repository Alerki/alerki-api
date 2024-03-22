import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_revisionsCreateManyDirectus_versionsInput } from './directus-revisions-create-many-directus-versions.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_revisionsCreateManyDirectus_versionsInputEnvelope {

    @Field(() => [directus_revisionsCreateManyDirectus_versionsInput], {nullable:false})
    @Type(() => directus_revisionsCreateManyDirectus_versionsInput)
    data!: Array<directus_revisionsCreateManyDirectus_versionsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
