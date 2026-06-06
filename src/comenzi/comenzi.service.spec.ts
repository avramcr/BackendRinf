import { Test, TestingModule } from '@nestjs/testing';
import { ComenziService } from './comenzi.service';

describe('ComenziService', () => {
  let service: ComenziService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComenziService],
    }).compile();

    service = module.get<ComenziService>(ComenziService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
