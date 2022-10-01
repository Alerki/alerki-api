import { Exclude } from 'class-transformer';
import { User } from '@prisma/client';
import { ValidateIf } from 'class-validator';

export class UserProfileDto implements User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  pictureId: string;
  clientProfileId: string;
  masterProfileId: string;
  phoneNumber: string;
  banned: boolean;
  masterProfile: any;
  clientProfile: any;
  createdAt: Date;
  updatedAt: Date;

  @Exclude() password: string;

  constructor(data: User) {
    Object.assign(this, data);
  }
}
