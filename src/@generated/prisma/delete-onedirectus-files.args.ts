import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_filesWhereUniqueInput } from '../directus-files/directus-files-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedirectusFilesArgs {
  @Field(() => directus_filesWhereUniqueInput, { nullable: false })
  @Type(() => directus_filesWhereUniqueInput)
  where!: directus_filesWhereUniqueInput;
}
