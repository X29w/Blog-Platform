import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostEntity } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => PostEntity)
export class PostResolver {
  @Inject()
  private prismaService: PrismaService;

  @Query(() => [PostEntity], { name: 'posts' })
  async findAll() {
    return await this.prismaService.post.findMany();
  }
}
