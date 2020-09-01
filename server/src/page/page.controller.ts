import { Controller, Get } from '@nestjs/common';
import { PageService }  from './page.service'

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
}
