import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  // *1
  findAllPetsLsit(): Array<string> {
    // 暂时还没有链接数据库, 这里就模拟去查询数据库的过程
    return ['tom', 'tony', '黑猫警长'];
  }
}
