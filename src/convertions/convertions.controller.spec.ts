import { Test, TestingModule } from '@nestjs/testing';
import { ConvertionsController } from './convertions.controller';
import { ConvertionsService } from './convertions.service';

describe('ConvertionsController', () => {
  let controller: ConvertionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertionsController],
      providers: [ConvertionsService],
    }).compile();

    controller = module.get<ConvertionsController>(ConvertionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
