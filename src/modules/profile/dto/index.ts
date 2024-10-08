import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

import { Users } from '../../../@generated';

@ArgsType()
export class UpdateProfileArgs
  implements Partial<Pick<Users, 'firstName' | 'lastName'>>
{
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;
}

@ArgsType()
export class FindProfileArgs implements Pick<Users, 'username'> {
  @Field(() => String, { nullable: false })
  @IsString()
  username: string;
}
