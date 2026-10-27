import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    // Loads variables from .env
    ConfigModule.forRoot({ isGlobal: true }),

    // PostgreSQL connection through TypeORM
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: Number(config.get('DB_PORT', 5432)),
        username: config.get<string>('DB_USERNAME', 'postgres'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME', 'product_management'),
        autoLoadEntities: true,
        synchronize: true, // creates tables automatically (fine for lab work)
      }),
    }),

    ProductsModule,
    EmployeesModule,
  ],
})
export class AppModule {}
