import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceUpdateWithoutService_translationsInput } from './master-service-update-without-service-translations.input';
import { MasterServiceCreateWithoutService_translationsInput } from './master-service-create-without-service-translations.input';

@InputType()
export class MasterServiceUpsertWithWhereUniqueWithoutService_translationsInput {
  @Field(() => MasterServiceWhereUniqueInput, { nullable: false })
  @Type(() => MasterServiceWhereUniqueInput)
  where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

  @Field(() => MasterServiceUpdateWithoutService_translationsInput, {
    nullable: false,
  })
  @Type(() => MasterServiceUpdateWithoutService_translationsInput)
  update!: MasterServiceUpdateWithoutService_translationsInput;

  @Field(() => MasterServiceCreateWithoutService_translationsInput, {
    nullable: false,
  })
  @Type(() => MasterServiceCreateWithoutService_translationsInput)
  create!: MasterServiceCreateWithoutService_translationsInput;
}
