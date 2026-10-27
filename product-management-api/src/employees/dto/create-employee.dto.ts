import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @MinLength(4)
  password: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @IsInt()
  @Min(0)
  yearsOfWorking: number;
}
