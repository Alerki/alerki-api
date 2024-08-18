import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import {
  CreateMasterScheduleArgs,
  DeleteMasterScheduleArgs,
  UpdateMasterScheduleArgs,
} from './dto';
import { JWTData } from '../auth/interfaces';

@Injectable()
export class MasterScheduleService {
  async createMasterSchedule(
    select: PrismaSelect,
    args: CreateMasterScheduleArgs,
    { id }: JWTData,
  ) {}

  async updateMasterSchedule(
    select: PrismaSelect,
    args: UpdateMasterScheduleArgs,
    { id }: JWTData,
  ) {}

  async deleteMasterSchedule(
    select: PrismaSelect,
    args: DeleteMasterScheduleArgs,
    user: JWTData,
  ) {}
}
