import { Test, TestingModule } from '@nestjs/testing';
import { LoadDataController } from './load-data.controller';

describe('LoadDataController', () => {
  let controller: LoadDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadDataController],
    }).compile();

    controller = module.get<LoadDataController>(LoadDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
