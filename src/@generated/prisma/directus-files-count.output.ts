import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_filesCount {
  @Field(() => Int, { nullable: false })
  UserPicture!: number;

  @Field(() => Int, { nullable: false })
  directus_settings_directus_settings_project_logoTodirectus_files!: number;

  @Field(() => Int, { nullable: false })
  directus_settings_directus_settings_public_backgroundTodirectus_files!: number;

  @Field(() => Int, { nullable: false })
  directus_settings_directus_settings_public_faviconTodirectus_files!: number;

  @Field(() => Int, { nullable: false })
  directus_settings_directus_settings_public_foregroundTodirectus_files!: number;
}
