import { Test, TestingModule } from '@nestjs/testing';
import { LoadDataService } from './load-data.service';

describe('LoadDataService', () => {
  let service: LoadDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadDataService],
    }).compile();

    service = module.get<LoadDataService>(LoadDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
