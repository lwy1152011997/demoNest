import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Query,
  Param,
  Request,
  Response,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { CatService } from './cat.service';

/**
 * Controller 我们知道它是用来处理传入的请求并向客户端返回响应
 * 我们先看get请求,
 * 客户端发送来的请求我们如何接收
 */
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  // 不带请求参数的
  // @Get('/getPetName')
  // getCatName() {
  //   return {
  //     code: 200,
  //     name: 'Tom',
  //   };
  // }

  // 带有请求参数的, 获取请求参数 用到 @Request()
  // @Get('/getPetName')
  // getCatName(@Request() reqParams) {
  //   return {
  //     code: 200,
  //     name: 'Tom',
  //     desc: `获取到请求参数${reqParams.query}`,
  //   };
  // }

  // 带有请求参数的, 获取请求参数 @Query()
  // @Get('/getPetName')
  // getCatName(@Query() reqParams) {
  //   return {
  //     code: 200,
  //     name: 'Tom',
  //     desc: `获取到请求参数${reqParams}`,
  //   };
  // }

  // get 请求的动态参数 @Param()
  // @Get('/getPetName/:id')
  // getCatName(@Param() reqParams) {
  //   return {
  //     code: 200,
  //     name: 'Tom',
  //     desc: `获取到请求参数${reqParams.params}`,
  //   };
  // }

  /**
   * 再看 Post请求
   */
  // @Post('/setPetName')
  // setPetName(@Request() reqParams) {
  //   return {
  //     code: 200,
  //     name: `获取到请求参数${reqParams.body}`,
  //   };
  // }

  // @Post('/setPetName')
  // setPetName(@Body() reqParams) {
  //   return {
  //     code: 200,
  //     name: `获取到请求参数${reqParams}`,
  //   };
  // }

  // 读取请求参数的某个key
  // @Post('/setPetName')
  // setPetName(@Body('type') reqParams) {
  //   return {
  //     code: 200,
  //     name: `获取到请求参数${reqParams.type}`,
  //   };
  // };

  // 读取请求头的信息
  @Post('/setPetName')
  setPetName(@Body('type') reqParams, @Headers() headerInfos) {
    return {
      code: 200,
      name: `获取到请求参数${reqParams.type}`,
      header: `请求头信息${headerInfos}`,
    };
  };
}
