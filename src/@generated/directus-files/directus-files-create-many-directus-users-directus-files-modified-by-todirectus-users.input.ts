import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  storage!: string;

  @Field(() => String, { nullable: true })
  filename_disk?: string;

  @Field(() => String, { nullable: false })
  filename_download!: string;

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

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => Int, { nullable: true })
  focal_point_x?: number;

  @Field(() => Int, { nullable: true })
  focal_point_y?: number;
}
