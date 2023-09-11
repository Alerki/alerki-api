import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from '../../shared/modules/prisma/prisma.modules';
import { ServiceController } from '../service.controller';
import { ServiceService } from '../services/service.service';
import { ServiceModuleService } from '../services/service-module.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceController],
      providers: [ServiceService, ServiceModuleService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ServiceService>(ServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
