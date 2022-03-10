import { Test, TestingModule } from '@nestjs/testing';
import { ConvertionsService } from './convertions.service';

describe('ConvertionsService', () => {
  let service: ConvertionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertionsService],
    }).compile();

    service = module.get<ConvertionsService>(ConvertionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
