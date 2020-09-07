import { Controller, Get, Post, Body } from '@nestjs/common';
import { PageService }  from './page.service';
import { PageInf } from '../page/page.inf';

@Controller('page')
export class PageController {
    constructor(
        private pageService: PageService,
    ){}
    
    @Get()
    async getAll(){
        const page_child = await this.pageService.findAll()
        return page_child
    }

    @Post()
    async create(@Body() data: PageInf) {
        const idea = this.pageService.post(data)
        return idea;
    }
}
