import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-create-without-directus-users-service-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput } from './service-create-or-connect-without-directus-users-service-user-updated-todirectus-users.input';
import { ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope } from './service-create-many-directus-users-service-user-updated-todirectus-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedManyWithoutDirectus_users_Service_user_updatedTodirectus_usersInput {

    @Field(() => [ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput)
    create?: Array<ServiceCreateWithoutDirectus_users_Service_user_updatedTodirectus_usersInput>;

    @Field(() => [ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutDirectus_users_Service_user_updatedTodirectus_usersInput>;

    @Field(() => ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope)
    createMany?: ServiceCreateManyDirectus_users_Service_user_updatedTodirectus_usersInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'id'>>;
}
