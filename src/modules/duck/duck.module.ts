import { Module } from '@nestjs/common';
import { DuckService } from './duck.service';

@Module({
  providers: [DuckService]
})
export class DuckModule {}
