import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { page } from '../page/page.entity';
import { PageController } from '../page/page.controller';
import { PageService } from '../page/page.service';

@Module({
    exports: [TypeOrmModule.forFeature([page])],
    controllers: [PageController],
    providers: [PageService]
})
export class PageModule {}
