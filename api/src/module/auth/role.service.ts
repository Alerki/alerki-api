import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class RoleService {
  private readonly prismaService = prisma;

  readonly roles = {
    master: 'master',
    client: 'client',
  };

  _clientRole: Prisma.Roles;
  _masterRole: Prisma.Roles;

  constructor() { }

  async getClientRole() {
    if (!this._clientRole) {
      const clientRole = await this.findFirst({
        where: {
          name: 'client',
        },
      });

      if (!clientRole) {
        throw new Error('Client role not exists');
      }

      this._clientRole = clientRole;
    }

    return this._clientRole;
  }

  async getMasterRole() {
    if (!this._masterRole) {
      const masterRole = await this.prismaService.roles.findFirst({
        where: {
          name: 'master',
        },
      });

      this._masterRole = masterRole;

      if (!masterRole) {
        throw new Error('Master role not exists');
      }
    }

    return this._masterRole;
  }

  async findFirst(data: Prisma.Prisma.RolesFindFirstArgs) {
    return await this.prismaService.roles.findFirst(data);
  }

  async delete({ id }: Pick<Prisma.Roles, 'id'>) {
    return await this.prismaService.roles.delete({
      where: {
        id,
      },
    });
  }
}
