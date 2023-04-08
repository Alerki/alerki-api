import { Test, TestingModule } from '@nestjs/testing';

import { AppointmentModuleService } from '../services/appointment-module.service';

describe('AppointmentService', () => {
  let service: AppointmentModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentModuleService],
    }).compile();

    service = module.get<AppointmentModuleService>(AppointmentModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
