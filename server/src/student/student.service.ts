import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from './student.entity';
import { from } from 'rxjs';
import { promises } from 'dns';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(student)
        private studentEntity: Repository<student>,
    ){}

    async findAll(): Promise <any> {
        return await this.studentEntity.find();
    }

    async findOne(id: any): Promise <any> {
        return await this.studentEntity.findOne(id);
    }

    async destroy(id: any): Promise<any> {
        await this.studentEntity.delete(id);
        return {delete: true};
    }
}
