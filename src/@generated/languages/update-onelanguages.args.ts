import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesUpdateInput } from './languages-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@ArgsType()
export class UpdateOnelanguagesArgs {

    @Field(() => languagesUpdateInput, {nullable:false})
    @Type(() => languagesUpdateInput)
    data!: languagesUpdateInput;

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: Prisma.AtLeast<languagesWhereUniqueInput, 'code'>;
}
