import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from '../../shared/modules/prisma/prisma.modules';
import { UserService } from '../services/user.service';
import { UserModule } from '../user.module';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [PrismaModule, UserModule],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
