import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.type';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Mutation(() => Lesson)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.create(name, startDate, endDate);
  }

  // @Query(() => [Lesson], { name: 'lesson' })
  // findAll() {
  //   return [{
  //     id: 'a339948405',
  //     name: 'Physic Class',
  //     startDate: new Date().toISOString,
  //     endDate: new Date().toISOString,
  //   }];
  // }

  @Query(() => Lesson, { name: 'lesson' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.lessonService.findOne(id);
  }

  // @Mutation(() => Lesson)
  // updateLesson(
  //   @Args('updateLessonInput') updateLessonInput: UpdateLessonInput,
  // ) {
  //   return this.lessonService.update(updateLessonInput.id, updateLessonInput);
  // }

  // @Mutation(() => Lesson)
  // removeLesson(@Args('id', { type: () => Int }) id: number) {
  //   return this.lessonService.remove(id);
  // }
}
