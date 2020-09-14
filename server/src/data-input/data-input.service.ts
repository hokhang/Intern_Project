import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { datainput }  from '../data-input/data-input.entity';
import { dataInputInf } from '../data-input/data-input.inf';

@Injectable()
export class DataInputService {
    constructor(
        @InjectRepository(datainput)
        private dataInputEntity: Repository <datainput>
    ){ }

    async post(data: any): Promise<any> {
        // const idea = this.dataInputEntity.create(data);
        return await this.dataInputEntity.save(data);
        // return idea;
    }

    async find():Promise<any>{
        return this.dataInputEntity.find()
    }
}
