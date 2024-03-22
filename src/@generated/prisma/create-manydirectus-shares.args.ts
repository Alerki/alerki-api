import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesCreateManyInput } from '../directus-shares/directus-shares-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydirectusSharesArgs {

    @Field(() => [directus_sharesCreateManyInput], {nullable:false})
    @Type(() => directus_sharesCreateManyInput)
    data!: Array<directus_sharesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
