import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationDto {
  @Field(() => Int, { nullable: true, defaultValue: 10 })
  take: number;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  page: number;
}
