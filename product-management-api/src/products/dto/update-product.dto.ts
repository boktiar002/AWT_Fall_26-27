import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// Every field is optional for PATCH
export class UpdateProductDto extends PartialType(CreateProductDto) {}
