import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }
  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }
  @Post()
  createStudent(@Body() studentData: { name: string; age: number }) {
    return this.studentService.createStudent(studentData);
  }
  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() studentData: { name: string; age: number },
  ) {
    return this.studentService.updateStudent(Number(id), studentData);
  }
  @Patch(':id')
  patchStudent(
    @Param('id') id: string,
    @Body() studentData: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.patchStudent(Number(id), studentData);
  }
  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
