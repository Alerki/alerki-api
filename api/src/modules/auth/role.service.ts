import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

@Injectable()
export class RoleService {
  constructor() { }

  masterRole: Prisma.Roles = 'master';
  clientRole: Prisma.Roles = 'client';
}
