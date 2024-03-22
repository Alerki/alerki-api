import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesCreateInput } from '../directus-shares/directus-shares-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedirectusSharesArgs {

    @Field(() => directus_sharesCreateInput, {nullable:false})
    @Type(() => directus_sharesCreateInput)
    data!: directus_sharesCreateInput;
}
