import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { datainput } from '../data-input/data-input.entity';
import { DataInputController } from '../data-input/data-input.controller';
import { DataInputService } from '../data-input/data-input.service';
 
@Module({
    imports: [TypeOrmModule.forFeature([datainput])],
    controllers: [DataInputController],
    providers: [DataInputService],
})
export class DataInputModule {
    
}
