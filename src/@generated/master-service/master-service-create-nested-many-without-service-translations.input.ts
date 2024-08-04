import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateWithoutService_translationsInput } from './master-service-create-without-service-translations.input';
import { Type } from 'class-transformer';
import { MasterServiceCreateOrConnectWithoutService_translationsInput } from './master-service-create-or-connect-without-service-translations.input';
import { MasterServiceCreateManyService_translationsInputEnvelope } from './master-service-create-many-service-translations-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';

@InputType()
export class MasterServiceCreateNestedManyWithoutService_translationsInput {
  @Field(() => [MasterServiceCreateWithoutService_translationsInput], {
    nullable: true,
  })
  @Type(() => MasterServiceCreateWithoutService_translationsInput)
  create?: Array<MasterServiceCreateWithoutService_translationsInput>;

  @Field(() => [MasterServiceCreateOrConnectWithoutService_translationsInput], {
    nullable: true,
  })
  @Type(() => MasterServiceCreateOrConnectWithoutService_translationsInput)
  connectOrCreate?: Array<MasterServiceCreateOrConnectWithoutService_translationsInput>;

  @Field(() => MasterServiceCreateManyService_translationsInputEnvelope, {
    nullable: true,
  })
  @Type(() => MasterServiceCreateManyService_translationsInputEnvelope)
  createMany?: MasterServiceCreateManyService_translationsInputEnvelope;

  @Field(() => [MasterServiceWhereUniqueInput], { nullable: true })
  @Type(() => MasterServiceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>>;
}
