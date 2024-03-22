import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_operationsCreateManyDirectus_usersInput } from './directus-operations-create-many-directus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class directus_operationsCreateManyDirectus_usersInputEnvelope {

    @Field(() => [directus_operationsCreateManyDirectus_usersInput], {nullable:false})
    @Type(() => directus_operationsCreateManyDirectus_usersInput)
    data!: Array<directus_operationsCreateManyDirectus_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
