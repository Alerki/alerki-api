import { ArgsType, Field } from '@nestjs/graphql';
import { MasterService } from '@prisma/client';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class CreateMasterServiceArgs
  implements
    Required<
      Pick<MasterService, 'CurrencyId' | 'ServiceId' | 'price' | 'duration'>
    >
{
  @Field(() => String, { nullable: true })
  @IsString()
  ServiceId: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  price: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  CurrencyId: number;

  @Field(() => Date, { nullable: true })
  @IsDate()
  duration: Date;
}

@ArgsType()
export class UpdateMasterServiceArgs {
  @Field(() => String, { nullable: false })
  @IsString()
  id: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  price: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  CurrencyId: number;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  duration: Date;
}

@ArgsType()
export class DeleteMasterServiceArgs implements Pick<MasterService, 'id'> {
  @Field(() => String, { nullable: false })
  @IsString()
  id: string;
}