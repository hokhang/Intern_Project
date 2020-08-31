import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBase_CONFIG } from './DB.config';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(DataBase_CONFIG)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
