import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateManyService_translationsInput } from './master-service-create-many-service-translations.input';
import { Type } from 'class-transformer';

@InputType()
export class MasterServiceCreateManyService_translationsInputEnvelope {

    @Field(() => [MasterServiceCreateManyService_translationsInput], {nullable:false})
    @Type(() => MasterServiceCreateManyService_translationsInput)
    data!: Array<MasterServiceCreateManyService_translationsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
