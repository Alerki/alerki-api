import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from '../../shared/modules/prisma/prisma.modules';
import { UserModuleService } from '../services/user.module.service';
import { UserService } from '../services/user.service';
import { UserController } from '../user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserModuleService, UserService],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
