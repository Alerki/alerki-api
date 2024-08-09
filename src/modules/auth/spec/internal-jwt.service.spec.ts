import { Test, TestingModule } from '@nestjs/testing';
import { JwtInternalService } from '../service/internal-jwt.service';

describe('InternalJwtService', () => {
  let service: JwtInternalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtInternalService],
    }).compile();

    service = module.get<JwtInternalService>(JwtInternalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
