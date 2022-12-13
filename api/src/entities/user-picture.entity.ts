import { Column, Entity } from 'typeorm';

import { PatternEntity } from '@Src/entities/utils/PatternEntity';

@Entity('UserPictures')
export class UserPicture extends PatternEntity {
  @Column({
    type: 'bytea',
  }) picture: Buffer;
}
