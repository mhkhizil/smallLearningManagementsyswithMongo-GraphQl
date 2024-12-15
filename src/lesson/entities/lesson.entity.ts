import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Lesson {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  startDate: string;
  @Field()
  endDate: string;
}
