import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_filesMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  storage?: string;

  @Field(() => String, { nullable: true })
  filename_disk?: string;

  @Field(() => String, { nullable: true })
  filename_download?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  folder?: string;

  @Field(() => String, { nullable: true })
  uploaded_by?: string;

  @Field(() => Date, { nullable: true })
  uploaded_on?: Date | string;

  @Field(() => String, { nullable: true })
  modified_by?: string;

  @Field(() => Date, { nullable: true })
  modified_on?: Date | string;

  @Field(() => String, { nullable: true })
  charset?: string;

  @Field(() => String, { nullable: true })
  filesize?: bigint | number;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => String, { nullable: true })
  embed?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => String, { nullable: true })
  tags?: string;

  @Field(() => Int, { nullable: true })
  focal_point_x?: number;

  @Field(() => Int, { nullable: true })
  focal_point_y?: number;
}
