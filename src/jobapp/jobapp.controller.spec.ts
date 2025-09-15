import { Test, TestingModule } from '@nestjs/testing';
import { JobappController } from './jobapp.controller';

describe('JobappController', () => {
  let controller: JobappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobappController],
    }).compile();

    controller = module.get<JobappController>(JobappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
