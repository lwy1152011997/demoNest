import { Test, TestingModule } from '@nestjs/testing';
import { DuckService } from './duck.service';

describe('DuckService', () => {
  let service: DuckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuckService],
    }).compile();

    service = module.get<DuckService>(DuckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
