import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { AuthSession } from '@Src/entities/auth-session.entity';
import { UserPicture } from '@Src/entities/user-picture.entity';

@Entity('Users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    length: 320,
  })
  email: string;

  @Column({
    unique: true,
    length: 15,
  })
  username: string;

  @Column({
    length: 30,
    nullable: true,
  })
  firstName: string;

  @Column({
    length: 30,
    nullable: true,
  })
  lastName: string;

  @Column({
    length: 20,
    unique: true,
  })
  phoneNumber: string;

  @Column({
    length: 60,
  })
  password: string;

  @Column({
    default: false,
  })
  banned: boolean;

  @OneToOne(
    () => UserPicture,
  )
  @JoinColumn()
  picture?: UserPicture;

  @Column(
    { nullable: true },
  )
  pictureId: string;

  @OneToMany(
    () => AuthSession,
    session => session.user,
  )
  sessions: AuthSession[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
