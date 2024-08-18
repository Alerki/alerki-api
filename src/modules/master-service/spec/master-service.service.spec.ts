import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceService } from '../master-service.service';

describe('MasterServiceService', () => {
  let service: MasterServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterServiceService],
    }).compile();

    service = module.get<MasterServiceService>(MasterServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
