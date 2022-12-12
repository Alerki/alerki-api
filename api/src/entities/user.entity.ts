import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { AuthSession } from '@Src/entities/auth-session.entity';
import { UserPicture } from '@Src/entities/user-picture.entity';
import { UserConfig } from '@Config/api/property.config';

@Entity('Users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    length: UserConfig.config.email.maxLength,
  })
  email: string;

  @Column({
    unique: true,
    length: UserConfig.config.username.maxLength,
  })
  username: string;

  @Column({
    length: UserConfig.config.firstName.maxLength,
    nullable: true,
  })
  firstName: string;

  @Column({
    length: UserConfig.config.lastName.maxLength,
    nullable: true,
  })
  lastName: string;

  @Column({
    length: UserConfig.config.phoneNumber.maxLength,
    unique: true,
  })
  phoneNumber: string;

  @Column({
    length: UserConfig.config.password.maxLength,
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
    {
      nullable: true,
    },
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
