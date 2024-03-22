import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { directus_sessionsWhereInput } from '../directus-sessions/directus-sessions-where.input';

@InputType()
export class Directus_sessionsListRelationFilter {

    @Field(() => directus_sessionsWhereInput, {nullable:true})
    every?: directus_sessionsWhereInput;

    @Field(() => directus_sessionsWhereInput, {nullable:true})
    some?: directus_sessionsWhereInput;

    @Field(() => directus_sessionsWhereInput, {nullable:true})
    none?: directus_sessionsWhereInput;
}
