import { ServiceConfig } from '@Config/api/property.config';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('Services')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: ServiceConfig.config.name.maxLength,
  })
  name: string;

  @Column({
    default: false,
  })
  available: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
