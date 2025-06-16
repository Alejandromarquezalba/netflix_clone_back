import { Test, TestingModule } from '@nestjs/testing';
import { FirstTableService } from './first_table.service';

describe('FirstTableService', () => {
  let service: FirstTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstTableService],
    }).compile();

    service = module.get<FirstTableService>(FirstTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
