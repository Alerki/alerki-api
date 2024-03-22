import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput } from './directus-files-create-many-directus-users-directus-files-modified-by-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope {

    @Field(() => [directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput], {nullable:false})
    @Type(() => directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput)
    data!: Array<directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
