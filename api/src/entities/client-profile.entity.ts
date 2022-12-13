import { Entity, OneToMany } from 'typeorm';

import { Appointment } from '@Src/entities/appointment.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('ClientProfiles')
export class ClientProfile extends PatternEntity {
  @OneToMany(
    () => Appointment,
    appointment => appointment.clientProfile,
  )
  appointments: Appointment[];
}
