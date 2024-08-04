import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

const LIMIT_MIN = 1;
const LIMIT_MAX = 100;
const LIMIT_DEFAULT = 20;

const PAGE_MIN = 1;
const PAGE_DEFAULT = PAGE_MIN;

export class PaginationDto {
  @ApiProperty({
    description: 'Limit of records',
    type: Number,
    example: 20,
    default: LIMIT_DEFAULT,
    required: false,
  })
  @Min(LIMIT_MIN)
  @Max(LIMIT_MAX)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  readonly limit: number = LIMIT_DEFAULT;

  @ApiProperty({
    description: 'Page number',
    type: Number,
    example: 1,
    default: PAGE_DEFAULT,
    required: false,
  })
  @Min(PAGE_MIN)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  readonly page: number = PAGE_DEFAULT;
}

@ArgsType()
export class PaginationQuery {
  @Field(() => Number, { nullable: true })
  limit?: number;

  @Field(() => Number, { nullable: true })
  page?: number;
}
