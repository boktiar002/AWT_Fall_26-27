import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProgressUpdate } from '../progress-update/progress-update.entity';
import { Installment } from '../installment/installment.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 255 })
  location: string;

  @Column({ type: 'int' })
  totalUnits: number;

  @Column({ length: 30, default: 'ONGOING' })
  status: string; // ONGOING | COMPLETED | ON_HOLD

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date' })
  expectedHandoverDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => ProgressUpdate, (u) => u.project)
  progressUpdates: ProgressUpdate[];

  @OneToMany(() => Installment, (i) => i.project)
  installments: Installment[];
}
