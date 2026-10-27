import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { ProjectModule } from './project/project.module';
import { ProgressUpdateModule } from './progress-update/progress-update.module';
import { InstallmentModule } from './installment/installment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ProjectModule,
    ProgressUpdateModule,
    InstallmentModule,
  ],
})
export class AppModule {}
