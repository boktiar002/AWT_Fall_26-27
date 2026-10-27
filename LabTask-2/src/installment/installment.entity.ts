import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../project/project.entity';

@Entity('installments')
export class Installment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  buyerName: string;

  @Column({ length: 20 })
  flatNumber: string; // e.g. "A-5"

  @Column({ type: 'int' })
  installmentNo: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({ type: 'date' })
  dueDate: string;

  @Column({ type: 'date', nullable: true })
  paidDate: string;

  @Column({ length: 20, default: 'PENDING' })
  status: string; // PENDING | PAID | OVERDUE

  @Column()
  projectId: number;

  @ManyToOne(() => Project, (p) => p.installments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @CreateDateColumn()
  createdAt: Date;
}
