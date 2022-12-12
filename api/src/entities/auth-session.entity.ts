import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User } from '@Src/entities/user.entity';
import { GeneralConfig, UserConfig } from '@Config/api/property.config';

@Entity('AuthSessions')
export class AuthSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: GeneralConfig.config.refreshToken.maxLength,
  })
  refreshToken: string;

  @Column({
    length: UserConfig.config.deviceName.maxLength,
    default: 'undefined',
  })
  deviceName: string;

  @ManyToOne(
    () => User, user => user.sessions,
  )
  user: User[];

  @Column()
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
