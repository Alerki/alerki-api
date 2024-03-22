import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_presetsCreateManyInput } from '../directus-presets/directus-presets-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusPresetsArgs {

    @Field(() => [directus_presetsCreateManyInput], {nullable:false})
    @Type(() => directus_presetsCreateManyInput)
    data!: Array<directus_presetsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
