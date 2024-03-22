import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileUpdateWithoutUserInput } from './client-profile-update-without-user.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateWithoutUserInput } from './client-profile-create-without-user.input';

@InputType()
export class ClientProfileUpsertWithoutUserInput {

    @Field(() => ClientProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => ClientProfileUpdateWithoutUserInput)
    update!: ClientProfileUpdateWithoutUserInput;

    @Field(() => ClientProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => ClientProfileCreateWithoutUserInput)
    create!: ClientProfileCreateWithoutUserInput;
}
