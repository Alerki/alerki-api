import { Test, TestingModule } from '@nestjs/testing';
import { MasterWeeklyScheduleService } from '../master-weekly-schedule.service';

describe('MasterWeeklyScheduleService', () => {
  let service: MasterWeeklyScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterWeeklyScheduleService],
    }).compile();

    service = module.get<MasterWeeklyScheduleService>(
      MasterWeeklyScheduleService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
