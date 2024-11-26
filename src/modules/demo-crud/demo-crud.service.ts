import { Injectable } from '@nestjs/common';
import { CreateDemoCrudDto } from './dto/create-demo-crud.dto';
import { UpdateDemoCrudDto } from './dto/update-demo-crud.dto';

@Injectable()
export class DemoCrudService {
  create(createDemoCrudDto: CreateDemoCrudDto) {
    return 'This action adds a new demoCrud';
  }

  findAll() {
    return `This action returns all demoCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demoCrud`;
  }

  update(id: number, updateDemoCrudDto: UpdateDemoCrudDto) {
    return `This action updates a #${id} demoCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} demoCrud`;
  }
}
