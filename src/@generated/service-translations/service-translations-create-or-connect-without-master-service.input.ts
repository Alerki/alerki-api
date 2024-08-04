import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Service_translationsWhereUniqueInput } from './service-translations-where-unique.input';
import { Type } from 'class-transformer';
import { Service_translationsCreateWithoutMasterServiceInput } from './service-translations-create-without-master-service.input';

@InputType()
export class Service_translationsCreateOrConnectWithoutMasterServiceInput {
  @Field(() => Service_translationsWhereUniqueInput, { nullable: false })
  @Type(() => Service_translationsWhereUniqueInput)
  where!: Prisma.AtLeast<Service_translationsWhereUniqueInput, 'id' | 'name'>;

  @Field(() => Service_translationsCreateWithoutMasterServiceInput, {
    nullable: false,
  })
  @Type(() => Service_translationsCreateWithoutMasterServiceInput)
  create!: Service_translationsCreateWithoutMasterServiceInput;
}
