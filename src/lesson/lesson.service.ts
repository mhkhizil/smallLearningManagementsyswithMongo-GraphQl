import { Injectable, Logger } from '@nestjs/common';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private lessonRepository) {}
  create(createLessonInput): Promise<Lesson> {
    const{name,startDate,endDate}=createLessonInput
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }

  findAll() {
    
    return this.lessonRepository.find();
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
