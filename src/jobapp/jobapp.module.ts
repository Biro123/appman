import { Module } from '@nestjs/common';
import { JobappController } from './jobapp.controller';
import { JobappService } from './jobapp.service';

@Module({
  controllers: [JobappController],
  providers: [JobappService]
})
export class JobappModule {}
