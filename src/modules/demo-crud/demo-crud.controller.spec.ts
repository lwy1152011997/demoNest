import { Test, TestingModule } from '@nestjs/testing';
import { DemoCrudController } from './demo-crud.controller';
import { DemoCrudService } from './demo-crud.service';

describe('DemoCrudController', () => {
  let controller: DemoCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoCrudController],
      providers: [DemoCrudService],
    }).compile();

    controller = module.get<DemoCrudController>(DemoCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
