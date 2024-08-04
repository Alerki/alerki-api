import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { Service_translations } from 'src/@generated/service-translations/service-translations.model';

import { PaginationQuery } from '../../shared/dto/pagination.dto';

@ArgsType()
export class FindServicesQuery {
  @Field(() => String, { nullable: true })
  name?: string;
}

@ArgsType()
export class FindMasterServicesQuery extends FindServicesQuery {}

@ObjectType()
export class Services {
  @Field(() => Number, { nullable: false })
  count: number;

  @Field(() => [Service_translations], { nullable: false })
  data: Service_translations[];
}

// export class GetServicesDto extends PaginationDto {
//   @ApiProperty({
//     description: 'Service name, by default returns list of services',
//     type: String,
//     maxLength: 64,
//     minLength: 1,
//     example: 'Haircut',
//     required: false,
//   })
//   @MaxLength(64)
//   @MinLength(1)
//   @IsString()
//   @IsOptional()
//   name?: string;
// }

// export class FindMasterServices extends PaginationDto {}
