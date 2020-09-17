import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoadDataController } from '../load-data/load-data.controller';
import { LoadDataService } from '../load-data/load-data.service';
 
@Module({
    imports:[],
    controllers: [LoadDataController],
    providers: [LoadDataService],
})
export class LoadDataModule {}
