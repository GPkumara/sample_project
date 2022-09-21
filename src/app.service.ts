import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './app.entity';
var user=[]
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository:Repository<User>,){}
  getHello(): string {
    return 'Hello World! hi';
  }
  geth1(b): number{
    return b+1;
  }
  post1(name,id): string{
    return "Hi "+name+" your id is "+id
  }
  post2(a): string{
    return `Hi iam ${a.name} my id is ${a.id}`
  }
  put1(id): string
  {
    // let a=JSON.parse(id);
    return id
  }
  pos2(val):string {
    user.push(JSON.parse(val))
    return "data stored";
  }
}
