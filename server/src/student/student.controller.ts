import { Controller, Get, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(
        private studentService: StudentService,
    ){}

    @Get()
    async getAllStudent(){
        const student = await this.studentService.findAll();
        return student;
    }

    @Get(':id')
    async getOneStudent( @Param('id') id: any){
        return this.studentService.findOne(id);
    }

    @Delete(':id')
    async  deleteStudent(@Param('id') id: any){
        return this.studentService.destroy(id);
    }

}
