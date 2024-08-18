import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyResolver } from '../currency.resolver';

describe('CurrencyResolver', () => {
  let resolver: CurrencyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyResolver],
    }).compile();

    resolver = module.get<CurrencyResolver>(CurrencyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
