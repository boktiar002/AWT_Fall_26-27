import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../project/project.entity';

@Entity('progress_updates')
export class ProgressUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  title: string; // e.g. "5th floor slab casting done"

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  completionPercent: number; // overall project progress 0-100

  @Column({ type: 'date' })
  updateDate: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column()
  projectId: number;

  @ManyToOne(() => Project, (p) => p.progressUpdates, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @CreateDateColumn()
  createdAt: Date;
}
