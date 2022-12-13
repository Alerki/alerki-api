import { PatternEntity } from '@Src/entities/utils/PatternEntity';
import { Column, Entity } from 'typeorm';

@Entity('MasterWeeklySchedules')
export class MasterWeeklySchedule extends PatternEntity {
  @Column({
    default: true,
  })
  monday: boolean;
  @Column({
    default: true,
  })
  tuesday: boolean;
  @Column({
    default: true,
  })
  wednesday: boolean;
  @Column({
    default: true,
  })
  thursday: boolean;
  @Column({
    default: true,
  })
  friday: boolean;
  @Column({
    default: false,
  })
  saturday: boolean;
  @Column({
    default: false,
  })
  sunday: boolean;

  @Column({
    type: 'time with time zone',
  })
  startTime?: string;

  @Column({
    type: 'time with time zone',
  })
  endTime?: string;
}
