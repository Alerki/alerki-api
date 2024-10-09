import { Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';

import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { UserValidationService } from './user-validation.service';

export interface UserServiceCreateNewUser {
  email: string;
  username: string;
  hashedPassword: string;
  profileType: 'client' | 'master';
}

@Injectable()
export class UserService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly userValidationService: UserValidationService,
  ) {}

  async createNewUser(args: UserServiceCreateNewUser) {
    return this.commonPrismaService.users.create({
      data: {
        status: StatusEnum.PUBLISHED,
        email: args.email.toLowerCase(),
        username: args.username,
        password: args.hashedPassword,
        ClientProfile: {
          create: {
            status: StatusEnum.PUBLISHED,
            date_created: new Date(),
          },
        },
        ...(args.profileType === 'master'
          ? {
              MasterProfile: {
                create: {
                  status: StatusEnum.PUBLISHED,
                  date_created: new Date(),
                },
              },
            }
          : {}),
        date_created: new Date(),
      },
    });
  }

  async findValidUser<ArgsT extends Prisma.UsersFindFirstArgs>(
    where: Partial<Pick<Users, 'id' | 'email'>>,
    args?: ArgsT,
  ) {
    try {
      const user = await this.findValidUserOrThrow(where, args);
      return user;
    } catch (e) {
      return undefined;
    }
  }

  async findValidUserOrThrow<ArgsT extends Prisma.UsersFindFirstArgs>(
    where: Partial<Pick<Users, 'id' | 'email' | 'username'>>,
    args?: ArgsT,
  ) {
    const user = await this.commonPrismaService.users.findFirst({
      where,
      ...args,
    });

    this.userValidationService.isUserDefined(user, true);
    this.userValidationService.isUserPublished(user, true);

    return user! as Prisma.UsersGetPayload<ArgsT>;
  }
}
