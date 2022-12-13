import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne } from 'typeorm';

import { UserConfig } from '@Config/api/property.config';
import { AuthSession } from '@Src/entities/auth-session.entity';
import { ClientProfile } from '@Src/entities/client-profile.entity';
import { MasterProfile } from '@Src/entities/master-profile.entity';
import { Notification } from '@Src/entities/notification.entity';
import { UserPicture } from '@Src/entities/user-picture.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('Users')
export class User extends PatternEntity {
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
  firstName?: string;

  @Column({
    length: UserConfig.config.lastName.maxLength,
    nullable: true,
  })
  lastName?: string;

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

  @Column({
    nullable: true,
  })
  pictureId?: string;

  @OneToMany(
    () => AuthSession,
    session => session.user,
  )
  sessions: AuthSession[];

  @ManyToMany(
    () => Notification,
    notification => notification.recipients,
  )
  notificationsRecipient: Notification[];

  @OneToMany(
    () => Notification,
    notification => notification.sender,
  )
  notificationsSender: Notification[];

  @OneToOne(
    () => ClientProfile,
    {
      nullable: false,
    },
  )
  @JoinColumn()
  clientProfile: ClientProfile;

  @OneToOne(
    () => MasterProfile,
  )
  @JoinColumn()
  masterProfile?: MasterProfile;
}
