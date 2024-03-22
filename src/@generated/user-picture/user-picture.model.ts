import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { directus_files } from '../directus-files/directus-files.model';
import { UserPictureCount } from './user-picture-count.output';

@ObjectType()
export class UserPicture {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => String, {nullable:false})
    picture!: string;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => directus_files, {nullable:false})
    directus_files?: directus_files;

    @Field(() => UserPictureCount, {nullable:false})
    _count?: UserPictureCount;
}
