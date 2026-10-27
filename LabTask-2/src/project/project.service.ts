import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly repo: Repository<Project>,
  ) {}

  async create(dto: CreateProjectDto): Promise<Project> {
    try {
      const entity = this.repo.create(dto);
      return await this.repo.save(entity);
    } catch (e: any) {
      // 23503 = foreign key violation (e.g. projectId does not exist)
      if (e?.code === '23503') throw new BadRequestException('Referenced project does not exist');
      throw e;
    }
  }

  findAll(): Promise<Project[]> {
    return this.repo.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number): Promise<Project> {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`Project with id ${id} not found`);
    return item;
  }
}
