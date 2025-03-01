import { Inject, UseGuards } from '@nestjs/common';
import { Args, Context, Int, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostEntity } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => PostEntity)
export class PostResolver {
  @Inject()
  private postService: PostService;

  // @UseGuards(JwtAuthGuard)
  @Query(() => [PostEntity], { name: 'posts' })
  async findAll(
    @Context() context,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ) {
    return await this.postService.findAll({ skip, take });
  }


  @Query(() => Int, { name: "postCount" })
  async count() {
    return await this.postService.count();
  }
}
