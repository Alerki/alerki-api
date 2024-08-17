import { Test, TestingModule } from '@nestjs/testing';
import { CommonPrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: CommonPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonPrismaService],
    }).compile();

    service = module.get<CommonPrismaService>(CommonPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});