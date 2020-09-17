import { Controller, Get, Query } from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller('load-data')
export class LoadDataController {
    constructor(
        private connection: Connection,
    ){ }
    
    @Get()
    async getAll(): Promise<any>{
        let query = this.connection.createQueryRunner();
        let data: Array<any> = await query.query(`select * from datainput`)
        //console.log(data);
        return data
        // let query = this.connection.createQueryRunner();
        // let components: Array<any> = await query.query(`select * from components c where c.page = 'insert'`);
        // console.log(components);
    }
}
