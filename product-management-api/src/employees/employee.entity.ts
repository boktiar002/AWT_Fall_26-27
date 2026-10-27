import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  // Dummy password for the lab (not hashed)
  @Column()
  password: string;

  @Column('int')
  age: number;

  @Column('int')
  yearsOfWorking: number;
}
