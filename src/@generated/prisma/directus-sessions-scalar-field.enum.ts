import { registerEnumType } from '@nestjs/graphql';

export enum Directus_sessionsScalarFieldEnum {
    token = "token",
    user = "user",
    expires = "expires",
    ip = "ip",
    user_agent = "user_agent",
    share = "share",
    origin = "origin"
}


registerEnumType(Directus_sessionsScalarFieldEnum, { name: 'Directus_sessionsScalarFieldEnum', description: undefined })
