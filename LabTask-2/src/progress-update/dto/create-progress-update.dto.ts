import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateProgressUpdateDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  completionPercent: number;

  @IsNotEmpty()
  @IsDateString()
  updateDate: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsNotEmpty()
  @IsInt()
  projectId: number;
}
