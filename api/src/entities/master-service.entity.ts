import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Currency } from '@Src/entities/currency.entity';
import { MasterProfile } from '@Src/entities/master-profile.entity';
import { Service } from '@Src/entities/service.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('MasterServices')
export class MasterService extends PatternEntity {
  @ManyToOne(
    () => Service,
    service => service.masterServices,
  )
  @JoinColumn()
  service: Service;

  @ManyToOne(
    () => MasterProfile,
    masterProfile => masterProfile.services,
  )
  @JoinColumn()
  masterProfile: MasterProfile;

  @ManyToOne(
    () => Currency,
    currency => currency.masterServices,
  )
  @JoinColumn()
  currency: Currency;

  @Column()
  price: number;

  @Column()
  duration: number;

  @Column({
    default: true,
  })
  available: boolean;

  @Column({
    type: 'float',
  })
  locationLat: number;

  @Column({
    type: 'float',
  })
  locationLng: number;
}
