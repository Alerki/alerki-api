import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_fieldsCreateManyInput } from '../directus-fields/directus-fields-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusFieldsArgs {

    @Field(() => [directus_fieldsCreateManyInput], {nullable:false})
    @Type(() => directus_fieldsCreateManyInput)
    data!: Array<directus_fieldsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
