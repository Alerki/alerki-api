import { Test, TestingModule } from '@nestjs/testing';
import { MasterScheduleResolver } from '../master-schedule.resolver';

describe('MasterScheduleResolver', () => {
  let resolver: MasterScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterScheduleResolver],
    }).compile();

    resolver = module.get<MasterScheduleResolver>(MasterScheduleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
