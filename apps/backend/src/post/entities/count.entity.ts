import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CountEntity {
  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  comments: number;
}
