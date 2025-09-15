import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobappModule } from './jobapp/jobapp.module';

@Module({
  imports: [JobappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
