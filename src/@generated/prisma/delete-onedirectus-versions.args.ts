import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_versionsWhereUniqueInput } from '../directus-versions/directus-versions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusVersionsArgs {

    @Field(() => directus_versionsWhereUniqueInput, {nullable:false})
    @Type(() => directus_versionsWhereUniqueInput)
    where!: directus_versionsWhereUniqueInput;
}
