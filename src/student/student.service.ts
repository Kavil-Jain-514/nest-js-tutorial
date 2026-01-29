import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 21 },
    { id: 4, name: 'David', age: 23 },
    { id: 5, name: 'Eve', age: 20 },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }
  createStudent(student: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...student,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  updateStudent(id: number, student: { name?: string; age?: number }) {
    const existingStudent = this.getStudentById(id);
    const updatedStudent = { ...existingStudent, ...student };
    this.students = this.students.map((s) =>
      s.id === id ? updatedStudent : s,
    );
    return updatedStudent;
  }
  patchStudent(id: number, student: Partial<{ name: string; age: number }>) {
    const existingStudent = this.getStudentById(id);
    return Object.assign(existingStudent, student);
  }
  deleteStudent(id: number) {
    const existingStudent = this.getStudentById(id);
    this.students = this.students.filter((s) => s.id !== id);
    return {
      message: 'Student deleted successfully',
      student: existingStudent,
    };
  }
}
