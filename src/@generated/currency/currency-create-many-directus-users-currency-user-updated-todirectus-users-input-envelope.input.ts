import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInput } from './currency-create-many-directus-users-currency-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInputEnvelope {

    @Field(() => [CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInput], {nullable:false})
    @Type(() => CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInput)
    data!: Array<CurrencyCreateManyDirectus_users_Currency_user_updatedTodirectus_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
