# Nestjs 简介  
[中文官网](https://nest.nodejs.cn "官网")  
# 是什么? 
`
它是一款 Node.js 服务器端 应用程序的框架;
`  
# 用来干嘛的? 
`
可以使用js(ts)来开发服务端; 是一款node.js服务端开发框架
`
# 怎么用()?  
1. 安装全局命令  
`npm i -g @nestjs/cli`
2. 使用命令  
`通过cli创建一个初始项目: nest new 项目名`

# 基础介绍
1. 目录结构介绍:  
```
|-- src
|   |-- app.controller.spec.ts 单元测试样例
|   |-- app.controller.ts 路由文件, 客户端请求访问后端服务都会先经过这个文件
|   |-- app.module.ts
|   |-- app.service.ts 业务逻辑文件, 对数据库进行各种CRUD操作
|   |-- main.ts 主要入口文件
|-- test 测试文件, 一般不用,有需要写单元测试的时候才用到 nest-cli.json
|-- nest-cli.json 整个项目的配置文件
```
2. 常用命令
```
nest -- help 查看常用命令列表
```
## 前置知识点
1. 每一个完整的服务moudle都由:  
```
controller 负责处理传入请求并向客户端返回响应
+ 
module
+ 
service 

```  
2. 装饰器  
```

```  

3. nest.js 是如何运行的(看图)  
4. moudule中的实现顺序(编写套路): 
  + 先定义自己的 controllers 和 service
  + 把自己的service放在module中的providers，这样controllers才能访问到service
  + 如果需要使用到外部的service，需要先将外部module隐去然后放在imports里
  + 如果自己的service也需要被其他module使用，需要将自己的service放到exports里
```
// 例子: 
nest g res modules/dog
nest g res modules/cat
```
