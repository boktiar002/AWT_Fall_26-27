import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { CreateInstallmentDto } from './dto/create-installment.dto';

@Controller('installments')
export class InstallmentController {
  constructor(private readonly service: InstallmentService) {}

  @Post()
  create(@Body() dto: CreateInstallmentDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
