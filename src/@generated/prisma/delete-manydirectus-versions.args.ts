import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsWhereInput } from '../directus-versions/directus-versions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydirectusVersionsArgs {

    @Field(() => directus_versionsWhereInput, {nullable:true})
    @Type(() => directus_versionsWhereInput)
    where?: directus_versionsWhereInput;
}
