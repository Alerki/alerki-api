import { Test, TestingModule } from '@nestjs/testing';
import { MasterScheduleService } from '../master-schedule.service';

describe('MasterScheduleService', () => {
  let service: MasterScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterScheduleService],
    }).compile();

    service = module.get<MasterScheduleService>(MasterScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
