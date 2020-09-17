import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PageService }  from './page.service';
import { PageInf } from '../page/page.inf';
import { Connection } from 'typeorm';


@Controller('page')
export class PageController {
    constructor(
        private pageService: PageService,
        private connection:Connection
    ){}
    
    @Get('name')
    async getAll(@Query('keyword') keyword:string): Promise<any>{
        //const page_child = await this.pageService.findAll()
        let query = this.connection.createQueryRunner();
        let components: Array<any> = await query.query(`select * from components c where c.page = '${keyword}'`);
        //console.log(components);

        var sortedIndexComponent: Array<any> = components.sort((index1,index2) =>{
            if(index1.index > index2.index){
                return 1;
            }
            if(index1.index < index2.index){
                return -1;
            }
            return 0;
        })
        //console.log(sortedIndexComponent);


        var data: Array<any> = []; 

        for(let _index in sortedIndexComponent){
            // console.log(components[_index].type)

            let data_temp: Array<any> = await query.query(`select * from ${components[_index].type}`);
            //console.log(data_temp)
            
            //console.log(this.pageService.sortIndex(data_temp))
            data.push(this.pageService.handleDataOfComponent(components[_index].type,data_temp));
        } 
        
        this.pageService.sortIndex(data)
        // console.log(data);
        let data_sort = this.pageService.sortIndex(data).sort((index1,index2) =>{
            if(index1.index > index2.index){
                return 1;
            }
            if(index1.index < index2.index){
                return -1;
            }
            return 0;
        })
        return data_sort;
    }

    @Post()
    async create(@Body() data: PageInf) {
        return this.pageService.post(data);
        
    }
}