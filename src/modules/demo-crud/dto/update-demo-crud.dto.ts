import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoCrudDto } from './create-demo-crud.dto';

export class UpdateDemoCrudDto extends PartialType(CreateDemoCrudDto) {}
