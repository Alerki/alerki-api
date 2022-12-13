import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { MasterProfile } from '@Src/entities/master-profile.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('MasterSchedules')
export class MasterSchedule extends PatternEntity {
  @Column({
  })
  startTime: number;

  @Column({
  })
  endTime: number;

  @Column({
    type: 'date',
  })
  date: Date;

  @Column({
    default: false,
  })
  dayOff: boolean;

  @ManyToOne(
    () => MasterProfile,
    masterProfile => masterProfile.schedules,
  )
  @JoinColumn()
  masterProfile: MasterProfile;
}
