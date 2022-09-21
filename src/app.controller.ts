import { Body, Controller, Get, Param, Post, Put ,Patch,Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("sample")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(":name")
  getH1(@Param("name") a:number ):number{
    return this.appService.geth1(a);
  }
  @Post("create")
  post1(@Body("name") name , @Body("id") id): string{
    return this.appService.post1(name,id);
  }
  @Post("create1")
  post2(@Body() a): string{
    return a.id
  }
  @Put("put")
  put1(@Body() id ) :string{
    return this.appService.put1(id)
  }
  @Patch(":id")
  patch1(@Param("id") id){
    return id
  }  
  @Delete(":id")
  remove(@Param("id") id){
    return id-1
  }
}
