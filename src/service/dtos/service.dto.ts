import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString, MaxLength, MinLength} from 'class-validator';

import {PaginationDto} from "../../shared/dto/Pagination.dto";

export class GetServicesDto extends PaginationDto {
  @ApiProperty({
    description: 'Service name, by default returns list of services',
    type: String,
    maxLength: 64,
    minLength: 1,
    example: 'Haircut',
    required: false,
  })
  @MaxLength(64)
  @MinLength(1)
  @IsString()
  @IsOptional()
  name?: string;
}

export class FindMasterServices extends PaginationDto {}

