import { registerEnumType } from '@nestjs/graphql';

export enum MasterProfileOrderByRelevanceFieldEnum {
    id = "id",
    masterWeeklySchedule = "masterWeeklySchedule"
}


registerEnumType(MasterProfileOrderByRelevanceFieldEnum, { name: 'MasterProfileOrderByRelevanceFieldEnum', description: undefined })
