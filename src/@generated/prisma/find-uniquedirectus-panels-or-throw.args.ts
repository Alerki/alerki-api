import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsWhereUniqueInput } from '../directus-panels/directus-panels-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedirectusPanelsOrThrowArgs {

    @Field(() => directus_panelsWhereUniqueInput, {nullable:false})
    @Type(() => directus_panelsWhereUniqueInput)
    where!: directus_panelsWhereUniqueInput;
}
