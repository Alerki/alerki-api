import { Test, TestingModule } from '@nestjs/testing';

import { MasterProfileService } from '../services/master-profile.service';

describe('MasterProfileService', () => {
  let service: MasterProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterProfileService],
    }).compile();

    service = module.get<MasterProfileService>(MasterProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
