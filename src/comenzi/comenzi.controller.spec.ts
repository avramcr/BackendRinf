import { Test, TestingModule } from '@nestjs/testing';
import { ComenziController } from './comenzi.controller';
import { ComenziService } from './comenzi.service';

describe('ComenziController', () => {
  let controller: ComenziController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComenziController],
      providers: [ComenziService],
    }).compile();

    controller = module.get<ComenziController>(ComenziController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
