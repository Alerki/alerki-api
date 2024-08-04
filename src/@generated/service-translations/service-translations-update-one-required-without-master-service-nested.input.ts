import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateWithoutMasterServiceInput } from './service-translations-create-without-master-service.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateOrConnectWithoutMasterServiceInput } from './service-translations-create-or-connect-without-master-service.input';
import { Service_translationsUpsertWithoutMasterServiceInput } from './service-translations-upsert-without-master-service.input';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Service_translationsUpdateWithoutMasterServiceInput } from './service-translations-update-without-master-service.input';

@InputType()
export class Service_translationsUpdateOneRequiredWithoutMasterServiceNestedInput {
  @Field(() => Service_translationsCreateWithoutMasterServiceInput, {
    nullable: true,
  })
  @Type(() => Service_translationsCreateWithoutMasterServiceInput)
  create?: Service_translationsCreateWithoutMasterServiceInput;

  @Field(() => Service_translationsCreateOrConnectWithoutMasterServiceInput, {
    nullable: true,
  })
  @Type(() => Service_translationsCreateOrConnectWithoutMasterServiceInput)
  connectOrCreate?: Service_translationsCreateOrConnectWithoutMasterServiceInput;

  @Field(() => Service_translationsUpsertWithoutMasterServiceInput, {
    nullable: true,
  })
  @Type(() => Service_translationsUpsertWithoutMasterServiceInput)
  upsert?: Service_translationsUpsertWithoutMasterServiceInput;

  @Field(() => Service_translationsWhereUniqueInput, { nullable: true })
  @Type(() => Service_translationsWhereUniqueInput)
  connect?: Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>;

  @Field(() => Service_translationsUpdateWithoutMasterServiceInput, {
    nullable: true,
  })
  @Type(() => Service_translationsUpdateWithoutMasterServiceInput)
  update?: Service_translationsUpdateWithoutMasterServiceInput;
}
