import { Test, TestingModule } from '@nestjs/testing';

import { ENV } from '../../config';
import { PrismaModule } from '../../shared/modules/prisma/prisma.modules';
import { UserModule } from '../../user/user.module';
import { AuthService } from '../services/auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    console.log(ENV);
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      imports: [PrismaModule, UserModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
