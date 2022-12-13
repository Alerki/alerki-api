import { Column, Entity, ManyToOne } from 'typeorm';

import { GeneralConfig, UserConfig } from '@Config/api/property.config';
import { User } from '@Src/entities/user.entity';
import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('AuthSessions')
export class AuthSession extends PatternEntity {
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
    () => User,
    user => user.sessions,
  )
  user: User[];

  @Column()
  userId: string;
}
