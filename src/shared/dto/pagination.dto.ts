import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class PaginationDto {
  @Field(() => Number, { nullable: true, defaultValue: 10 })
  take: number;

  @Field(() => Number, { nullable: true, defaultValue: 1 })
  page: number;
}
