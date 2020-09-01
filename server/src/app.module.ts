import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBase_CONFIG } from './DB.config';
import { PageModule } from './page/page.module';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(DataBase_CONFIG), PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
