import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsCreateInput } from '../directus-versions/directus-versions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusVersionsArgs {

    @Field(() => directus_versionsCreateInput, {nullable:false})
    @Type(() => directus_versionsCreateInput)
    data!: directus_versionsCreateInput;
}
