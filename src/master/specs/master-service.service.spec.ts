import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from '../../shared/modules/prisma/prisma.modules';
import { MasterServiceService } from '../services/master-service.service';

describe('MasterService', () => {
  let service: MasterServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterServiceService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<MasterServiceService>(MasterServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
