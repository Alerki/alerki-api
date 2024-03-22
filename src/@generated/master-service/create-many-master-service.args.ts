import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceCreateManyInput } from './master-service-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMasterServiceArgs {

    @Field(() => [MasterServiceCreateManyInput], {nullable:false})
    @Type(() => MasterServiceCreateManyInput)
    data!: Array<MasterServiceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
