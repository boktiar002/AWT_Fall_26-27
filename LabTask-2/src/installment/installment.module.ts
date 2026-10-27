import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Installment } from './installment.entity';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Installment])],
  controllers: [InstallmentController],
  providers: [InstallmentService],
})
export class InstallmentModule {}
