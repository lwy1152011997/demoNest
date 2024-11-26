import { Test, TestingModule } from '@nestjs/testing';
import { DemoCrudService } from './demo-crud.service';

describe('DemoCrudService', () => {
  let service: DemoCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoCrudService],
    }).compile();

    service = module.get<DemoCrudService>(DemoCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
