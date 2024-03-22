import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesUpdateManyMutationInput } from './languages-update-many-mutation.input';
import { Type } from 'class-transformer';
import { languagesWhereInput } from './languages-where.input';

@ArgsType()
export class UpdateManylanguagesArgs {

    @Field(() => languagesUpdateManyMutationInput, {nullable:false})
    @Type(() => languagesUpdateManyMutationInput)
    data!: languagesUpdateManyMutationInput;

    @Field(() => languagesWhereInput, {nullable:true})
    @Type(() => languagesWhereInput)
    where?: languagesWhereInput;
}
