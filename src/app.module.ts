import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/entities/lesson.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      synchronize: true,
      useUnifiedTopology: true,
      url: 'mongodb://localhost/school',
      entities: [Lesson,Student],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
