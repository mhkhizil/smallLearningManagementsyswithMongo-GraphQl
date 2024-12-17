import { Injectable } from '@nestjs/common';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private lessonRepository) {}
  create(name: string, startDate: string, endDate: string): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }

  findAll() {
    return `This action returns all lesson`;
  }

  findOne(id: string) {

    return this.lessonRepository.findOne({id});
  }

  update(id: number, updateLessonInput: UpdateLessonInput) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}
