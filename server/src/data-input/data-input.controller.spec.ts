import { Test, TestingModule } from '@nestjs/testing';
import { DataInputController } from './data-input.controller';

describe('DataInputController', () => {
  let controller: DataInputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataInputController],
    }).compile();

    controller = module.get<DataInputController>(DataInputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
