import { Test, TestingModule } from '@nestjs/testing';
import { MasterWeeklyScheduleResolver } from '../master-weekly-schedule.resolver';

describe('MasterWeeklyScheduleResolver', () => {
  let resolver: MasterWeeklyScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterWeeklyScheduleResolver],
    }).compile();

    resolver = module.get<MasterWeeklyScheduleResolver>(
      MasterWeeklyScheduleResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
