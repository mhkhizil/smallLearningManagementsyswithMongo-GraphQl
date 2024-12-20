import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';

import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { StudentType } from './student.type';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => StudentType)
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.studentService.create(createStudentInput);
  }

  // @Query(() => [Student], { name: 'student' })
  // findAll() {
  //   return this.studentService.findAll();
  // }

  // @Query(() => Student, { name: 'student' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.studentService.findOne(id);
  // }

  // @Mutation(() => Student)
  // updateStudent(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
  //   return this.studentService.update(updateStudentInput.id, updateStudentInput);
  // }

  // @Mutation(() => Student)
  // removeStudent(@Args('id', { type: () => Int }) id: number) {
  //   return this.studentService.remove(id);
  // }
}
