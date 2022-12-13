import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ClientProfile } from '@Src/entities/client-profile.entity';
import { MasterProfile } from '@Src/entities/master-profile.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('Appointments')
export class Appointment extends PatternEntity {
  @ManyToOne(
    () => MasterProfile,
    masterProfile => masterProfile.appointments,
    {
      nullable: false,
    },
  )
  @JoinColumn()
  masterProfile: MasterProfile;

  @ManyToOne(
    () => ClientProfile,
    clientProfile => clientProfile,
    {
      nullable: false,
    },
  )
  @JoinColumn()
  clientProfile: ClientProfile;

  @Column({
    type: 'timestamp with time zone',
  })
  startDate: string;

  @Column({
    type: 'timestamp with time zone',
  })
  endDate: string;
}
