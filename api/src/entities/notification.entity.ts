import { NotificationType } from '@Src/entities/notification-type.entity';
import { User } from '@Src/entities/user.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';
import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity('Notifications')
export class Notification extends PatternEntity {
  @ManyToOne(
    () => NotificationType,
    notificationType => notificationType.notifications,
  )
  @JoinColumn()
  notificationType: NotificationType;

  @ManyToMany(
    () => User,
    user => user.notificationsRecipient,
  )
  @JoinTable()
  recipients: User[];

  @ManyToOne(
    () => User,
    user => user.notificationsSender,
  )
  @JoinColumn()
  sender: User;
}
