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
    async getAll(@Query('keyword') keyword:string):Promise<any>{
        //const page_child = await this.pageService.findAll()
        let query = this.connection.createQueryRunner();
        let components: Array<any> = await query.query(`select * from components c where c.page = '${keyword}'`);
        var data: Array<any> = []; 

        for(let _index in components){
            // console.log(components[_index].type)
            let data_temp: Array<any> = await query.query(`select * from ${components[_index].type}`);
            // console.log(data_temp)
            data.push(this.pageService.handleDataOfComponent(components[_index].type,data_temp));
        } 
        
        
        // console.log(data);
        return data;
    }

    @Post()
    async create(@Body() data: PageInf) {
        const idea = this.pageService.post(data)
        return idea;
    }
}
