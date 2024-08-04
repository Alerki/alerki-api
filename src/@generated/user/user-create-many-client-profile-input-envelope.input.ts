import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyClientProfileInput } from './user-create-many-client-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyClientProfileInputEnvelope {
  @Field(() => [UserCreateManyClientProfileInput], { nullable: false })
  @Type(() => UserCreateManyClientProfileInput)
  data!: Array<UserCreateManyClientProfileInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
