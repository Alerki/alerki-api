import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsWhereInput } from '../directus-panels/directus-panels-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusPanelsArgs {

    @Field(() => directus_panelsWhereInput, {nullable:true})
    @Type(() => directus_panelsWhereInput)
    where?: directus_panelsWhereInput;
}
