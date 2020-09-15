import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { page }  from '../page/page.entity';
import { PageInf } from '../page/page.inf';

@Injectable()
export class PageService {
    constructor(
        @InjectRepository(page)
        private pageEntity: Repository<page>
    ){}

    async findAll(): Promise<any>{
        return await this.pageEntity.find();
    }

    async post(data: page): Promise<page> {
       
        return await this.pageEntity.save(data);
        //return idea;
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

    sortIndex(data: Array<any>){
        var index:Array<any> = []
        data.forEach(p=> {
            for( let _index in p){
                index.push(p[_index]);
                
            }
           
            //index =Object.assign(index, p)
            // console.log("bsdjhdjhv",)
        })
        // console.log(index);
        return index;
    }
}

