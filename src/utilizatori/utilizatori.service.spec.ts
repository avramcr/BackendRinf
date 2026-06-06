import { Test, TestingModule } from '@nestjs/testing';
import { UtilizatoriService } from './utilizatori.service';

describe('UtilizatoriService', () => {
  let service: UtilizatoriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilizatoriService],
    }).compile();

    service = module.get<UtilizatoriService>(UtilizatoriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
