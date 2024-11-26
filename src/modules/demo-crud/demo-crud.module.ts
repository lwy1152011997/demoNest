import { Module } from '@nestjs/common';
import { DemoCrudService } from './demo-crud.service';
import { DemoCrudController } from './demo-crud.controller';

@Module({
  controllers: [DemoCrudController],
  providers: [DemoCrudService],
})
export class DemoCrudModule {}
