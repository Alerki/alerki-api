import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_foldersCount {

    @Field(() => Int, {nullable:false})
    directus_files!: number;

    @Field(() => Int, {nullable:false})
    other_directus_folders!: number;

    @Field(() => Int, {nullable:false})
    directus_settings!: number;
}
