import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBase_CONFIG } from './DB.config';
import { PageModule } from './page/page.module';
import { DataInputModule } from './data-input/data-input.module';
import { LoadDataModule } from './load-data/load-data.module';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(DataBase_CONFIG), PageModule, DataInputModule, LoadDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
