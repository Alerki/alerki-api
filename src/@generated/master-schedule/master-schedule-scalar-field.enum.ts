import { registerEnumType } from '@nestjs/graphql';

export enum MasterScheduleScalarFieldEnum {
    id = "id",
    status = "status",
    date_created = "date_created",
    date_updated = "date_updated",
    date = "date",
    startTime = "startTime",
    endTime = "endTime",
    dayOff = "dayOff",
    masterProfile = "masterProfile"
}


registerEnumType(MasterScheduleScalarFieldEnum, { name: 'MasterScheduleScalarFieldEnum', description: undefined })
