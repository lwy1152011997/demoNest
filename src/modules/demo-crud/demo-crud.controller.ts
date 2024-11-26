import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemoCrudService } from './demo-crud.service';
import { CreateDemoCrudDto } from './dto/create-demo-crud.dto';
import { UpdateDemoCrudDto } from './dto/update-demo-crud.dto';

@Controller('demo-crud')
export class DemoCrudController {
  constructor(private readonly demoCrudService: DemoCrudService) {}

  @Post()
  create(@Body() createDemoCrudDto: CreateDemoCrudDto) {
    return this.demoCrudService.create(createDemoCrudDto);
  }

  @Get()
  findAll() {
    return this.demoCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demoCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoCrudDto: UpdateDemoCrudDto) {
    return this.demoCrudService.update(+id, updateDemoCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoCrudService.remove(+id);
  }
}
