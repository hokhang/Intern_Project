import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const DataBase_CONFIG: TypeOrmModuleOptions = {
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'khanghb',
    database: 'Manage_student',
    autoLoadEntities:true,
    synchronize: false,
}