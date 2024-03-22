import { Field, ObjectType, Query, Resolver } from "@nestjs/graphql";

@ObjectType()
export class Events {
    @Field(() => Number)
    age: number;
}

@Resolver()
export class AppResolver {
    @Query(() => Events)
    async x(): Promise<{ age: number }> {
        return {
            age: 12,
        }
    }
}