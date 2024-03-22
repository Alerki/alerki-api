import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class directus_migrations {

    @Field(() => ID, {nullable:false})
    version!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    timestamp!: Date | null;
}
