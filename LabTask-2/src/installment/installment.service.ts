import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Installment } from './installment.entity';
import { CreateInstallmentDto } from './dto/create-installment.dto';

@Injectable()
export class InstallmentService {
  constructor(
    @InjectRepository(Installment)
    private readonly repo: Repository<Installment>,
  ) {}

  async create(dto: CreateInstallmentDto): Promise<Installment> {
    try {
      const entity = this.repo.create(dto);
      return await this.repo.save(entity);
    } catch (e: any) {
      // 23503 = foreign key violation (e.g. projectId does not exist)
      if (e?.code === '23503') throw new BadRequestException('Referenced project does not exist');
      throw e;
    }
  }

  findAll(): Promise<Installment[]> {
    return this.repo.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number): Promise<Installment> {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException(`Installment with id ${id} not found`);
    return item;
  }
}
