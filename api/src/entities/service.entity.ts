import { Column, Entity, OneToMany } from 'typeorm';

import { ServiceConfig } from '@Config/api/property.config';
import { MasterService } from '@Src/entities/master-service.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('Services')
export class Service extends PatternEntity {
  @Column({
    length: ServiceConfig.config.name.maxLength,
  })
  name: string;

  @Column({
    default: false,
  })
  available: boolean;

  @OneToMany(
    () => MasterService,
    masterService => masterService.service,
  )
  masterServices: MasterService[];
}
