import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesCreateManyInput } from './languages-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManylanguagesArgs {
  @Field(() => [languagesCreateManyInput], { nullable: false })
  @Type(() => languagesCreateManyInput)
  data!: Array<languagesCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
