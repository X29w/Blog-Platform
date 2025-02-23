import { Inject, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostEntity } from './entities/post.entity';

@Resolver(() => PostEntity)
export class PostResolver {
  @Inject()
  private prismaService: PrismaService;

  @UseGuards(JwtAuthGuard)
  @Query(() => [PostEntity], { name: 'posts' })
  async findAll() {
    return await this.prismaService.post.findMany();
  }
}
