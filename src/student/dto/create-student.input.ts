import { InputType, Int, Field } from '@nestjs/graphql';
import { Min, MinLength, minLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
 @MinLength(1)
  @Field()
  firstName: string;
  @MinLength(1)
  @Field()
  lastName: string;
}
