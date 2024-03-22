import { registerEnumType } from '@nestjs/graphql';

export enum LanguagesScalarFieldEnum {
    code = "code",
    name = "name",
    direction = "direction"
}


registerEnumType(LanguagesScalarFieldEnum, { name: 'LanguagesScalarFieldEnum', description: undefined })
