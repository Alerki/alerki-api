import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyMasterProfileInput } from './user-create-many-master-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyMasterProfileInputEnvelope {
  @Field(() => [UserCreateManyMasterProfileInput], { nullable: false })
  @Type(() => UserCreateManyMasterProfileInput)
  data!: Array<UserCreateManyMasterProfileInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
