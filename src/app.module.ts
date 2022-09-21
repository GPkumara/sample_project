import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './app.entity'

@Module({
  imports: [StudentModule,TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5342,
      username: 'kumaran',
      password:'root',
      database: 'kumaran',
      entities: [User],
      synchronize: true,
  }),TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
