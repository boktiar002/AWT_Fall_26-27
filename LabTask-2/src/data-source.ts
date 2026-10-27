import { DataSource, DataSourceOptions } from 'typeorm';
import { Project } from './project/project.entity';
import { ProgressUpdate } from './progress-update/progress-update.entity';
import { Installment } from './installment/installment.entity';

// One config shared by the Nest app AND the TypeORM migration CLI
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD ?? '',
  database: 'buildtrack',
  entities: [Project, ProgressUpdate, Installment],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false, // tables are created ONLY by migrations
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
