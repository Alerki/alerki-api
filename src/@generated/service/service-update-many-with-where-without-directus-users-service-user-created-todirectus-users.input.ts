import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceScalarWhereInput } from './service-scalar-where.input';
import { Type } from 'class-transformer';
import { ServiceUpdateManyMutationInput } from './service-update-many-mutation.input';

@InputType()
export class ServiceUpdateManyWithWhereWithoutDirectus_users_Service_user_createdTodirectus_usersInput {

    @Field(() => ServiceScalarWhereInput, {nullable:false})
    @Type(() => ServiceScalarWhereInput)
    where!: ServiceScalarWhereInput;

    @Field(() => ServiceUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceUpdateManyMutationInput)
    data!: ServiceUpdateManyMutationInput;
}
