import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Service_translationsCreateWithoutMasterServiceInput } from './service-translations-create-without-master-service.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateOrConnectWithoutMasterServiceInput } from './service-translations-create-or-connect-without-master-service.input';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';

@InputType()
export class Service_translationsCreateNestedOneWithoutMasterServiceInput {
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

  @Field(() => Service_translationsWhereUniqueInput, { nullable: true })
  @Type(() => Service_translationsWhereUniqueInput)
  connect?: Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>;
}
