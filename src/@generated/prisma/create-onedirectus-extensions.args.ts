import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_extensionsCreateInput } from '../directus-extensions/directus-extensions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusExtensionsArgs {

    @Field(() => directus_extensionsCreateInput, {nullable:false})
    @Type(() => directus_extensionsCreateInput)
    data!: directus_extensionsCreateInput;
}
