import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressUpdate } from './progress-update.entity';
import { ProgressUpdateService } from './progress-update.service';
import { ProgressUpdateController } from './progress-update.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProgressUpdate])],
  controllers: [ProgressUpdateController],
  providers: [ProgressUpdateService],
})
export class ProgressUpdateModule {}
