import { Test, TestingModule } from '@nestjs/testing';
import { DuckController } from './duck.controller';

describe('DuckController', () => {
  let controller: DuckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuckController],
    }).compile();

    controller = module.get<DuckController>(DuckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
