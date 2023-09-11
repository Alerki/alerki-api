import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from '../../shared/modules/prisma/prisma.modules';
import { ServiceService } from '../services/service.service';
import { ServiceModuleService } from '../services/service-module.service';

describe('ServiceModuleService', () => {
  let service: ServiceModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceModuleService, ServiceService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ServiceModuleService>(ServiceModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
