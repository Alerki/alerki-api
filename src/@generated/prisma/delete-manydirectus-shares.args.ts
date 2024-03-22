import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesWhereInput } from '../directus-shares/directus-shares-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusSharesArgs {

    @Field(() => directus_sharesWhereInput, {nullable:true})
    @Type(() => directus_sharesWhereInput)
    where?: directus_sharesWhereInput;
}
