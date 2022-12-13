import { Notification } from '@Src/entities/notification.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('NotificationTypes')
export class NotificationType extends PatternEntity {
  @Column({
    length: 32,
  })
  name: string;

  @Column({
    length: 128,
  })
  template: string;

  @OneToMany(
    () => Notification,
    notification => notification.notificationType,
  )
  notifications: Notification[];
}
