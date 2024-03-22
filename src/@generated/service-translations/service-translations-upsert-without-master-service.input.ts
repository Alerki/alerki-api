import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsUpdateWithoutMasterServiceInput } from './service-translations-update-without-master-service.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateWithoutMasterServiceInput } from './service-translations-create-without-master-service.input';

@InputType()
export class Service_translationsUpsertWithoutMasterServiceInput {

    @Field(() => Service_translationsUpdateWithoutMasterServiceInput, {nullable:false})
    @Type(() => Service_translationsUpdateWithoutMasterServiceInput)
    update!: Service_translationsUpdateWithoutMasterServiceInput;

    @Field(() => Service_translationsCreateWithoutMasterServiceInput, {nullable:false})
    @Type(() => Service_translationsCreateWithoutMasterServiceInput)
    create!: Service_translationsCreateWithoutMasterServiceInput;
}
