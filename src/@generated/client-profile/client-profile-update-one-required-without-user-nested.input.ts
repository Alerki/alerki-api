import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileCreateWithoutUserInput } from './client-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateOrConnectWithoutUserInput } from './client-profile-create-or-connect-without-user.input';
import { ClientProfileUpsertWithoutUserInput } from './client-profile-upsert-without-user.input';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';
import { ClientProfileUpdateWithoutUserInput } from './client-profile-update-without-user.input';

@InputType()
export class ClientProfileUpdateOneRequiredWithoutUserNestedInput {

    @Field(() => ClientProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => ClientProfileCreateWithoutUserInput)
    create?: ClientProfileCreateWithoutUserInput;

    @Field(() => ClientProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ClientProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput;

    @Field(() => ClientProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => ClientProfileUpsertWithoutUserInput)
    upsert?: ClientProfileUpsertWithoutUserInput;

    @Field(() => ClientProfileWhereUniqueInput, {nullable:true})
    @Type(() => ClientProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;

    @Field(() => ClientProfileUpdateWithoutUserInput, {nullable:true})
    @Type(() => ClientProfileUpdateWithoutUserInput)
    update?: ClientProfileUpdateWithoutUserInput;
}
