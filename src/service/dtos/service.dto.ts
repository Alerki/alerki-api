import { IsOptional, IsString } from 'class-validator';

export class GetServicesDto {
  @IsString()
  @IsOptional()
  name?: string;
}
