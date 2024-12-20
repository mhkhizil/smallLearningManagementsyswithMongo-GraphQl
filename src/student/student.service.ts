import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { v4 as uuid } from 'uuid';
import { findSourceMap } from 'module';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private studentRepository) {}
  create(createStudentInput: CreateStudentInput) {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName
    });
    return this.studentRepository.save(student);
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
