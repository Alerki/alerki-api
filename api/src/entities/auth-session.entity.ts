import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User } from '@Src/entities/user.entity';

@Entity('AuthSessions')
export class AuthSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 1024,
  })
  refreshToken: string;

  @Column({
    length: 30,
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
