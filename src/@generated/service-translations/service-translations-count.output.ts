import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Service_translationsCount {
  @Field(() => Int, { nullable: false })
  MasterService?: number;
}
