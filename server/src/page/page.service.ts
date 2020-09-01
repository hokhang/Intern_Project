import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {page }  from '../page/page.entity';

@Injectable()
export class PageService {
    constructor(
        @InjectRepository(page)
        private pageEntity: Repository <page>
    ){}

    async findAll(): Promise<any>{
        return await this.pageEntity.find();
    }
}

