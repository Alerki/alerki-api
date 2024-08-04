import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Type } from 'class-transformer';
import { MasterServiceUpdateWithoutService_translationsInput } from './master-service-update-without-service-translations.input';

@InputType()
export class MasterServiceUpdateWithWhereUniqueWithoutService_translationsInput {
  @Field(() => MasterServiceWhereUniqueInput, { nullable: false })
  @Type(() => MasterServiceWhereUniqueInput)
  where!: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

  @Field(() => MasterServiceUpdateWithoutService_translationsInput, {
    nullable: false,
  })
  @Type(() => MasterServiceUpdateWithoutService_translationsInput)
  data!: MasterServiceUpdateWithoutService_translationsInput;
}
