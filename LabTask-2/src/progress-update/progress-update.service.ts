import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgressUpdate } from './progress-update.entity';
import { CreateProgressUpdateDto } from './dto/create-progress-update.dto';

@Injectable()
export class ProgressUpdateService {
  constructor(
    @InjectRepository(ProgressUpdate)
    private readonly repo: Repository<ProgressUpdate>,
  ) {}

  async create(dto: CreateProgressUpdateDto): Promise<ProgressUpdate> {
    try {
      const entity = this.repo.create(dto);
      return await this.repo.save(entity);
    } catch (e: any) {
      // 23503 = foreign key violation (e.g. projectId does not exist)
      if (e?.code === '23503') throw new BadRequestException('Referenced project does not exist');
      throw e;
    }
  }

  findAll(): Promise<ProgressUpdate[]> {
    return this.repo.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number): Promise<ProgressUpdate> {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`ProgressUpdate with id ${id} not found`);
    return item;
  }
}
