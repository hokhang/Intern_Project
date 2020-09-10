import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { page }  from '../page/page.entity';
import { PageInf } from '../page/page.inf';

@Injectable()
export class PageService {
    constructor(
        @InjectRepository(page)
        private pageEntity: Repository <page>
    ){}

    async findAll(): Promise<any>{
        return await this.pageEntity.find();
    }

    async post(data: PageInf): Promise<any> {
        const idea = this.pageEntity.create(data);
        this.pageEntity.save(idea);
        return idea;
    }
    
    handleDataOfComponent(name_comp: string, data: Array<any>){
        var dataHandled: Array<any> = []
        data.forEach(p=>{
            let object = {};
            object['type'.trim()] = name_comp;
            dataHandled.push(Object.assign(object,p));
        })
        return dataHandled;
    }
}

