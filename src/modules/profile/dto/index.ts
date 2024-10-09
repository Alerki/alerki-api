import { ArgsType, Field } from '@nestjs/graphql';
import { MasterService } from '@prisma/client';
import { IsOptional, IsString, IsUUID } from 'class-validator';

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
  @IsOptional()
  username: string;
}

@ArgsType()
export class FindManyProfileByServiceIdArgs
  implements Pick<MasterService, 'ServiceId'>
{
  @Field(() => String, { nullable: false })
  @IsUUID()
  ServiceId: string;
}
