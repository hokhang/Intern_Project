import { Test, TestingModule } from '@nestjs/testing';
import { DataInputService } from './data-input.service';

describe('DataInputService', () => {
  let service: DataInputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataInputService],
    }).compile();

    service = module.get<DataInputService>(DataInputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
