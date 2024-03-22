import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_panelsCreateManyDirectus_dashboardsInput } from './directus-panels-create-many-directus-dashboards.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_panelsCreateManyDirectus_dashboardsInputEnvelope {

    @Field(() => [directus_panelsCreateManyDirectus_dashboardsInput], {nullable:false})
    @Type(() => directus_panelsCreateManyDirectus_dashboardsInput)
    data!: Array<directus_panelsCreateManyDirectus_dashboardsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
