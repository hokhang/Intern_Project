import { Controller, Post, Body, Get } from '@nestjs/common';
import { DataInputService } from '../data-input/data-input.service';
import { dataInputInf } from '../data-input/data-input.inf';
 

@Controller('data-input')
export class DataInputController {

    constructor(
        private dataInputService: DataInputService,
    ){}

    @Post()
    async create(@Body() data: any) {
        return this.dataInputService.post(data)
    
    }

    @Get()
    async getAll(){
        const a = this.dataInputService.find();
        return a;
    }
}
