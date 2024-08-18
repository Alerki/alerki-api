import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceResolver } from '../master-service.resolver';

describe('MasterServiceResolver', () => {
  let resolver: MasterServiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterServiceResolver],
    }).compile();

    resolver = module.get<MasterServiceResolver>(MasterServiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
