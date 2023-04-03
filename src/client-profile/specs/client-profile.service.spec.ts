import { Test, TestingModule } from '@nestjs/testing';

import { ClientProfileService } from '../client-profile.service';

describe('ClientProfileService', () => {
  let service: ClientProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientProfileService],
    }).compile();

    service = module.get<ClientProfileService>(ClientProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
