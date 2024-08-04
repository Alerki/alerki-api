import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterServiceCreateManyMasterProfileInput } from './master-service-create-many-master-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class MasterServiceCreateManyMasterProfileInputEnvelope {
  @Field(() => [MasterServiceCreateManyMasterProfileInput], { nullable: false })
  @Type(() => MasterServiceCreateManyMasterProfileInput)
  data!: Array<MasterServiceCreateManyMasterProfileInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
