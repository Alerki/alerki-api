import { MasterService } from '@Src/entities/master-service.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('Currencies')
export class Currency extends PatternEntity {
  @Column()
  code: string;

  @Column()
  character: string;

  @Column({
    default: true,
  })
  available: boolean;

  @OneToMany(
    () => MasterService,
    masterService => masterService.currency,
  )
  masterServices: MasterService[];
}
