import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsScalarWhereInput } from './service-translations-scalar-where.input';
import { Type } from 'class-transformer';
import { Service_translationsUpdateManyMutationInput } from './service-translations-update-many-mutation.input';

@InputType()
export class Service_translationsUpdateManyWithWhereWithoutServiceInput {

    @Field(() => Service_translationsScalarWhereInput, {nullable:false})
    @Type(() => Service_translationsScalarWhereInput)
    where!: Service_translationsScalarWhereInput;

    @Field(() => Service_translationsUpdateManyMutationInput, {nullable:false})
    @Type(() => Service_translationsUpdateManyMutationInput)
    data!: Service_translationsUpdateManyMutationInput;
}
