import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

// Every field is optional for PATCH
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
