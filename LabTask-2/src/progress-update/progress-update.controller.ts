import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProgressUpdateService } from './progress-update.service';
import { CreateProgressUpdateDto } from './dto/create-progress-update.dto';

@Controller('progress-updates')
export class ProgressUpdateController {
  constructor(private readonly service: ProgressUpdateService) {}

  @Post()
  create(@Body() dto: CreateProgressUpdateDto) {
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
