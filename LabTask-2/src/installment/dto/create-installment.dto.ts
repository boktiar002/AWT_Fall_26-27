import { IsDateString, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateInstallmentDto {
  @IsNotEmpty()
  @IsString()
  buyerName: string;

  @IsNotEmpty()
  @IsString()
  flatNumber: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  installmentNo: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount: number;

  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsDateString()
  paidDate?: string;

  @IsOptional()
  @IsIn(['PENDING', 'PAID', 'OVERDUE'])
  status?: string;

  @IsNotEmpty()
  @IsInt()
  projectId: number;
}
