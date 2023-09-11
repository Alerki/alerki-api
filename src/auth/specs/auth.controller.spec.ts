import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { LocalStrategy } from '../../google/google.strategy';
import { PrismaModule } from '../../shared/modules/prisma/prisma.modules';
import { UserModule } from '../../user/user.module';
import { AuthController } from '../auth.controller';
import { AuthService } from '../services/auth.service';
import { AuthModuleService } from '../services/auth-module.service';
import { JwtTokenService } from '../services/jwt-token.service';
import { SessionService } from '../services/session.service';
import { JwtStrategy } from '../strategies/jwt.strategy';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthModuleService,
        AuthService,
        SessionService,
        JwtTokenService,
        LocalStrategy,
        JwtStrategy,
      ],
      imports: [UserModule, JwtModule, PrismaModule],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
