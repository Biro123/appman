import { Test, TestingModule } from '@nestjs/testing';
import { JobappService } from './jobapp.service';

describe('JobappService', () => {
  let service: JobappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobappService],
    }).compile();

    service = module.get<JobappService>(JobappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
