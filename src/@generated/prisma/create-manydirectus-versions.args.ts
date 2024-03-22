import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsCreateManyInput } from '../directus-versions/directus-versions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusVersionsArgs {

    @Field(() => [directus_versionsCreateManyInput], {nullable:false})
    @Type(() => directus_versionsCreateManyInput)
    data!: Array<directus_versionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
