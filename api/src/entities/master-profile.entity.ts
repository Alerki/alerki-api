import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

import { Appointment } from '@Src/entities/appointment.entity';
import { MasterSchedule } from '@Src/entities/master-schedule.entity';
import { MasterService } from '@Src/entities/master-service.entity';
import { MasterWeeklySchedule } from '@Src/entities/master-weekly-schedule.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('MasterProfiles')
export class MasterProfile extends PatternEntity {
  @OneToMany(
    () => MasterService,
    masterService => masterService.masterProfile,
  )
  @JoinColumn()
  services: MasterService[];

  @OneToMany(
    () => MasterSchedule,
    masterSchedule => masterSchedule.masterProfile,
  )
  schedules: MasterSchedule[];

  @OneToOne(
    () => MasterWeeklySchedule,
  )
  @JoinColumn()
  weeklySchedule: MasterWeeklySchedule;

  @OneToMany(
    () => Appointment,
    appointment => appointment.masterProfile,
  )
  appointments: Appointment[];

  @Column({
    default: true,
  })
  available: boolean;
}
