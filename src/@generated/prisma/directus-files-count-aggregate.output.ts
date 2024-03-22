import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_filesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    storage!: number;

    @Field(() => Int, {nullable:false})
    filename_disk!: number;

    @Field(() => Int, {nullable:false})
    filename_download!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    folder!: number;

    @Field(() => Int, {nullable:false})
    uploaded_by!: number;

    @Field(() => Int, {nullable:false})
    uploaded_on!: number;

    @Field(() => Int, {nullable:false})
    modified_by!: number;

    @Field(() => Int, {nullable:false})
    modified_on!: number;

    @Field(() => Int, {nullable:false})
    charset!: number;

    @Field(() => Int, {nullable:false})
    filesize!: number;

    @Field(() => Int, {nullable:false})
    width!: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    embed!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    tags!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    focal_point_x!: number;

    @Field(() => Int, {nullable:false})
    focal_point_y!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
